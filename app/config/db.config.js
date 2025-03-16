module.exports = {
  HOST: "DESKTOP-7963AV5",
  PORT: "1433",
  USER: "sa",
  PASSWORD: "1234",
  DB: "finance_tracker",
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
