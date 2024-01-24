const drinksLayout = ({children}) => {
  return (
    <div className='max-w-6xl mx-auto px-6 py-12'>
      <div className="mockup-code max-w-xl bg-slate-950 ">
        <pre data-prefix="$">
          <code>npm i daisyui</code>
        </pre>
      </div>

      {children}
    </div>
  );
}
export default drinksLayout