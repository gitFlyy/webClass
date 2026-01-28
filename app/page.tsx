export default function Home() {
  return (
    <body className="flex flex-col items-center">
      <nav className="mt-5 mb-10 flex gap-4 justify-center">
        <a href="#gallery" className="bg-blue-500 text-white p-2 rounded">Gallery</a>
        <a href="#samples" className="bg-blue-500 text-white p-2 rounded">Samples</a>
        <a href="#links" className="bg-blue-500 text-white p-2 rounded">Links</a>
        <a href="#login" className="bg-blue-500 text-white p-2 rounded">Login</a>
        <a href="#signup" className="bg-blue-500 text-white p-2 rounded">Signup</a>
        <a href="#feedback" className="bg-blue-500 text-white p-2 rounded">Feedback</a>
      </nav>

      <div className="bg-blue-400 sm:bg-green-400 md:bg-purple-400 lg:bg-yellow-400">
        <section id="gallery" className="text-center">
          <h1 className="font-extrabold text-5xl mt-5">Art Gallery</h1>
          <p className="mt-5 mb-5">This is my art gallery containing art I have made over the last 100 years.</p>
        </section>
      </div>

      <section id="samples" className="text-center">
        <h1 className="mt-3 text-3xl font-bold">Art samples</h1>
        <table className="art-table mx-auto">
          <tbody>
            <tr>
              <td><img className="art-img" src="/art1.jpg" alt="Sample 1" width="300" /></td>
              <td><img className="art-img" src="/art2.jpg" alt="Sample 2" width="300" /></td>
              <td><img className="art-img" src="/art3.jpg" alt="Sample 3" width="300" /></td>
            </tr>
            <tr>
              <td>Sample 1</td>
              <td>Sample 2</td>
              <td>Sample 3</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="links" className="mt-5 text-center">
        <h1 className="font-extrabold mb-2 text-2xl">Art Links</h1>
        <a href="https://www.w3schools.com" className="text-blue-500">Visit W3Schools</a><br />
        <a href="https://www.youtube.com" className="text-blue-500">Visit Youtube</a><br />
        <a href="https://www.cp.com" className="text-blue-500">Visit CP</a><br />
      </section>

      <section id="login" className="w-full max-w-2xl" style={{padding: '30px'}}>
        <div style={{padding: '30px'}}>
          <h2 className="text-2xl mb-5 text-center">Login</h2>
          
          <form className="">
            <label htmlFor="login-email" style={{fontWeight: 'bold'}}>Email:</label><br />
            <input type="email" id="login-email" name="email" style={{width: '100%', padding: '8px'}} /><br />
            
            <label htmlFor="login-password" style={{fontWeight: 'bold'}}>Password:</label><br />
            <input type="password" id="login-password" name="password" style={{width: '100%', padding: '8px'}} /><br />
            
            <button type="submit" className="bg-green-700 p-2 border-4 rounded-2xl border-green-300">Login</button>
          </form>
        </div>
      </section>

      <section id="signup" className="w-full max-w-2xl" style={{padding: '30px'}}>
        <div style={{padding: '30px'}}>
          <h2 className="text-2xl mb-5 text-center">Signup</h2>
          
          <form className="">
            <label htmlFor="signup-name" style={{fontWeight: 'bold'}}>Name:</label><br />
            <input type="text" id="signup-name" name="name" style={{width: '100%', padding: '8px'}} /><br />
            
            <label htmlFor="signup-email" style={{fontWeight: 'bold'}}>Email:</label><br />
            <input type="email" id="signup-email" name="email" style={{width: '100%', padding: '8px'}} /><br />
            
            <label htmlFor="signup-password" style={{fontWeight: 'bold'}}>Password:</label><br />
            <input type="password" id="signup-password" name="password" style={{width: '100%', padding: '8px'}} /><br />
            
            <button type="submit" className="bg-green-700 p-2 border-4 rounded-2xl border-green-300">Signup</button>
          </form>
        </div>
      </section>

      <section id="feedback" className="w-full max-w-2xl" style={{padding: '30px'}}>
        <div style={{padding: '30px'}}>
          <h2 className="text-2xl text-white-200 mb-5 text-center">Art Gallery Feedback</h2>
          
          <form className="">
            <label htmlFor="fname" style={{fontWeight: 'bold'}}>Name:</label><br />
            <input type="text" id="fname" name="fname" style={{width: '100%', padding: '8px'}} /><br />
            
            <label htmlFor="email" style={{fontWeight: 'bold'}}>Email:</label><br />
            <input type="email" id="email" name="email" style={{width: '100%', padding: '8px'}} /><br />
            
            <label htmlFor="feedback" style={{fontWeight: 'bold'}}>What can be improved:</label><br />
            <textarea id="feedback" name="feedback" rows={4} style={{width: '100%', padding: '8px'}}></textarea><br />
            
            <button type="submit" className="bg-green-700 p-2 border-4 rounded-2xl border-green-300">Submit</button>
          </form>
        </div>
      </section>
    </body>
  );
}
