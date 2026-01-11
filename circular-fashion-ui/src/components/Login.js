export default function Login({ onLogin }) {
  return (
    <div className="login">
      <h2>Login</h2>
      <input placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button onClick={onLogin}>Login</button>
    </div>
  );
}
