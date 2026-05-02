"use client";

import { useEffect, useState } from "react";
import { fetchNotifications } from "../services/api";
import { sortByPriority } from "../utils/priority";
import NotificationCard from "../components/NotificationCard";
import "./page.css";

type NotificationItem = {
  ID: string | number;
  Type: string;
  Message: string;
  Timestamp: string;
};

export default function Home() {
  const [data, setData] = useState<NotificationItem[]>([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        setErrorMessage("");

        const res = await fetchNotifications();

        if (res?.error) {
          setData([]);
          setErrorMessage(res.error);
          return;
        }

        const notifications = res?.notifications || [];
        const sorted = sortByPriority(notifications);
        setData(sorted);
      } catch {
        setData([]);
        setErrorMessage("Unable to fetch notifications.");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const filtered = filter ? data.filter((n) => n.Type === filter) : data;
  const top10 = filtered.slice(0, 10);

  const stats = {
    total: data.length,
    placement: data.filter((n) => n.Type === "Placement").length,
    result: data.filter((n) => n.Type === "Result").length,
    event: data.filter((n) => n.Type === "Event").length,
  };

  return (
    <div className="page-container">
      <div className="header-section">
        <div className="header-content">
          <div>
            <h1 className="page-title">Notifications Hub</h1>
            <p className="page-subtitle">Stay updated with the latest notifications and announcements</p>
          </div>
          <div className="header-stats">
            <div className="stat-card"><div className="stat-number">{stats.total}</div><div className="stat-label">Total</div></div>
            <div className="stat-card"><div className="stat-number">{stats.placement}</div><div className="stat-label">Placement</div></div>
            <div className="stat-card"><div className="stat-number">{stats.result}</div><div className="stat-label">Results</div></div>
            <div className="stat-card"><div className="stat-number">{stats.event}</div><div className="stat-label">Events</div></div>
          </div>
        </div>
      </div>

      <div className="filter-section">
        <label className="filter-label">Filter by Type</label>
        <div className="filter-buttons">
          {["All", "Placement", "Result", "Event"].map((type) => (
            <button
              key={type}
              className={`filter-btn ${filter === (type === "All" ? "" : type) ? "active" : ""}`}
              onClick={() => setFilter(type === "All" ? "" : type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="notifications-section">
        {errorMessage ? (
          <div className="error-banner">
            <span>⚠️</span>
            <div>{errorMessage}</div>
          </div>
        ) : null}

        {loading ? (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Loading notifications...</p>
          </div>
        ) : top10.length === 0 ? (
          <div className="empty-state">
            <p className="empty-icon">📭</p>
            <h3>No Notifications</h3>
            <p>There are no notifications to display at the moment.</p>
          </div>
        ) : (
          <div className="notifications-list">
            <div className="list-header">
              <p className="list-count">
                ✓ Showing {top10.length} of {filtered.length} notification{filtered.length !== 1 ? 's' : ''}
              </p>
            </div>
            {top10.map((item) => <NotificationCard key={item.ID} item={item} />)}
          </div>
        )}
      </div>
    </div>
  );
}
