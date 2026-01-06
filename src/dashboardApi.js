const BASE_URL = "http://localhost:8080/api/dashboard";

export const getRealtimeThreats = () =>
  fetch(`${BASE_URL}/realtime-threats`).then(r => r.json());

export const getRecentAlerts = () =>
  fetch(`${BASE_URL}/alerts`).then(r => r.json());

export const getDailyActivity = () =>
  fetch(`${BASE_URL}/daily-activity`).then(r => r.json());

export const getTodaySegment = () =>
  fetch(`${BASE_URL}/today-segment`).then(r => r.json());
