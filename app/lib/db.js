import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "72.167.133.180",
  user: "qcadmin",
  password: `Dj"Hi4PaJt9Kt_^`,
  database: "qcadmin_xv_cms",
  waitForConnections: true,
  connectionLimit: 100,
  queueLimit: 0,
});

export function closeConnection(connection) {
  connection.end((err) => {
    if (err) {
      console.error("Error closing the connection:", err);
    } else {
      console.log("Connection closed successfully.");
    }
  });
}
export default pool;
