import React, { useState } from "react";
import "../styles/cpu.css";

export default function CpuScheduling() {
  const [processes, setProcesses] = useState([]);
  const [arrival, setArrival] = useState("");
  const [burst, setBurst] = useState("");
  const [showResult, setShowResult] = useState(false);

  const addProcess = () => {
    if (!arrival || !burst) return;
    const pid = `P${processes.length + 1}`;
    setProcesses([...processes, { pid, arrival: parseInt(arrival), burst: parseInt(burst) }]);
    setArrival("");
    setBurst("");
    setShowResult(false);
  };

  const resetAll = () => {
    setProcesses([]);
    setArrival("");
    setBurst("");
    setShowResult(false);
  };

  const calculateFCFS = () => {
    let time = 0;
    return processes.map((p) => {
      const start = Math.max(time, p.arrival);
      time = start + p.burst;
      const completion = time;
      const turnaround = completion - p.arrival;
      const waiting = turnaround - p.burst;
      return { ...p, start, finish: completion, tat: turnaround, wt: waiting };
    });
  };

  const result = calculateFCFS();
  const avgTAT = result.length ? (result.reduce((sum, p) => sum + p.tat, 0) / result.length).toFixed(2) : "0.00";
  const avgWT = result.length ? (result.reduce((sum, p) => sum + p.wt, 0) / result.length).toFixed(2) : "0.00";

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
            + Add Task
          </button>
        </div>

        {processes.length === 0 ? (
          <p className="no-process-msg">No processes added yet. Add one above!</p>
        ) : (
          <>
            <div className="process-summary">
              {processes.map((p, index) => (
                <p key={index}>
                  <strong>{p.pid}</strong> &nbsp; AT: {p.arrival} &nbsp; BT: {p.burst}
                </p>
              ))}
            </div>

            <div className="action-buttons">
              <button className="add-btn" onClick={() => setShowResult(true)}>Visualize FCFS</button>
              <button className="add-btn" onClick={resetAll}>Reset All</button>
            </div>
          </>
        )}

        {showResult && (
          <>
            <h2 className="section-title">Gantt Chart</h2>
            <div className="gantt-chart">
              {result.map((p, index) => (
                <div key={index} className="gantt-box">
                  <span className="gantt-pid">{p.pid}</span>
                  <span className="gantt-time">{p.start} → {p.finish}</span>
                </div>
              ))}
            </div>

            <h2 className="section-title">Process Details</h2>
            <table className="cpu-table">
              <thead>
                <tr>
                  <th>P</th>
                  <th>AT</th>
                  <th>BT</th>
                  <th>CT</th>
                  <th>TAT</th>
                  <th>WT</th>
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

            <div className="average-values">
              <h3>Average Values</h3>
              <p><strong>Average Turnaround Time:</strong> <span className="highlight">{avgTAT}</span></p>
              <p><strong>Average Waiting Time:</strong> <span className="highlight">{avgWT}</span></p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
