export default function Feedback() {
  return (
    <body style={{padding: '30px'}}>
      <div style={{padding: '30px'}}>
        <h2 className="text-2xl text-white-200 mb-5">Art Gallery Feedback</h2>
        
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
    </body>
  );
}
