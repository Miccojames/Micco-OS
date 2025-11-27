import React, { useState } from "react";
import "../styles/cpu.css";

export default function CpuScheduling() {
  const [processes, setProcesses] = useState([]);
  const [arrival, setArrival] = useState("");
  const [burst, setBurst] = useState("");
  const [showResult, setShowResult] = useState(false);

  const addProcess = () => {
    if (!arrival || !burst) return;
    const pid = `p${processes.length + 1}`;
    setProcesses([
      ...processes,
      { pid, arrival: parseInt(arrival), burst: parseInt(burst) },
    ]);
    setArrival("");
    setBurst("");
    setShowResult(false);
  };

  const removeProcess = (index) => {
    const updated = [...processes];
    updated.splice(index, 1);
    setProcesses(updated);
    setShowResult(false);
  };

  const resetAll = () => {
    setProcesses([]);
    setArrival("");
    setBurst("");
    setShowResult(false);
  };

  const handleVisualize = () => {
    if (processes.length < 3) {
      alert("Please enter at least 3 processes.");
      return;
    }
    setShowResult(true);
  };

  const calculateFCFS = () => {
    const sorted = [...processes].sort((a, b) => a.arrival - b.arrival);
    let time = 0;
    return sorted.map((p) => {
      const start = Math.max(time, p.arrival);
      time = start + p.burst;
      const completion = time;
      const turnaround = completion - p.arrival;
      const waiting = turnaround - p.burst;
      return { ...p, start, finish: completion, tat: turnaround, wt: waiting };
    });
  };

  const result = calculateFCFS();
  const avgTAT = result.length
    ? (result.reduce((sum, p) => sum + p.tat, 0) / result.length).toFixed(2)
    : "0.00";
  const avgWT = result.length
    ? (result.reduce((sum, p) => sum + p.wt, 0) / result.length).toFixed(2)
    : "0.00";
  const totalCT = result.length ? result[result.length - 1].finish : 0;

  return (
    <section className="cpu-wrapper">
      <div className="cpu-container">
        <h1 className="cpu-title">First Come First Served (FCFS)</h1>

        <h2 className="section-title">Add Processes</h2>
        <div className="cpu-inputs">
          <input
            type="number"
            placeholder="Arrival Time (AT)"
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
          />
          <input
            type="number"
            placeholder="Burst Time (BT)"
            value={burst}
            onChange={(e) => setBurst(e.target.value)}
          />
          <button className="add-btn" onClick={addProcess}>
            Add Process
          </button>
        </div>

        {processes.length === 0 ? (
          <p className="no-process-msg">No processes added yet. Add one above!</p>
        ) : (
          <>
            <div className="process-summary">
              {processes.map((p, index) => (
                <div key={index} className="process-row">
                  <p>
                    <strong>{p.pid}</strong> &nbsp;
                    <span>AT: {p.arrival}</span>
                    <span>BT: {p.burst}</span>
                  </p>
                  <button className="remove-btn" onClick={() => removeProcess(index)}>
                    ✖ Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="action-buttons">
              <button className="add-btn" onClick={handleVisualize}>
                Calculate
              </button>
              <button className="reset-btn" onClick={resetAll}>
                Reset
              </button>
            </div>
          </>
        )}

        {showResult && (
          <>
            <h2 className="section-title">Gantt Chart</h2>
            <div className="gantt-chart">
              {result.map((p, index) => (
                <div key={index} className="gantt-box">
                  <div className="gantt-label">{p.pid}</div>
                  <div className="gantt-range">{p.start} – {p.finish}</div>
                </div>
              ))}
            </div>

            <h2 className="section-title">Process Details</h2>
            <table className="cpu-table">
              <thead>
                <tr>
                  <th>Process</th>
                  <th>Arrival Time</th>
                  <th>Burst Time</th>
                  <th>Completion Time</th>
                  <th>Turn Around Time</th>
                  <th>Waiting Time</th>
                </tr>
              </thead>
              <tbody>
                {result.map((p, index) => (
                  <tr key={index}>
                    <td>{p.pid}</td>
                    <td>{p.arrival}</td>
                    <td>{p.burst}</td>
                    <td>{p.finish}</td>
                    <td>{p.tat}</td>
                    <td>{p.wt}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="summary-card">
              <div className="stat">
                Average Turn Around Time
                <span className="value">{avgTAT}</span>
              </div>
              <div className="stat">
                Average Waiting Time
                <span className="value">{avgWT}</span>
              </div>
              <div className="stat">
                Total Completion Time
                <span className="value">{totalCT}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
