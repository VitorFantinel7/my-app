import "./global.css"


export function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Bem-vindo</h1>
      </header>

      <form>
      <div className="inputContainer">
        <label htmlfor="email">E-mail</label>
        <input
         type="text"
          name="email"
           id="email"
           placeholder="fantinelvitor443@gmail.com"
         />
      </div>

      <div className="inputContainer">
        <label htmlfor="password">senha</label>
        <input
         type="password"
          name="password"
           id="password"
           placeholder="*********"
         />
      </div>

      <a href="">esqueci minha senha?</a>

      <button type="submit" class="btn btn-outline-success  btn-block">conectar</button>
      </form>
    </div>
  )
}