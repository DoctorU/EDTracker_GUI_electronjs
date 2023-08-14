
function Calibration() {
  return (
    <form id='calibration'>
      <fieldset id='xfields'>
        <label htmlFor='xfields'>X</label>
        <button className='increase'>+</button>
        <button className='decrease'>-</button>
        <input type='text' className='value' value='Current Value' readOnly/>
      </fieldset>
      <fieldset id='yfields'>
        <label htmlFor='yfields'>Y</label>
        <button className='increase'>+</button>
        <button className='decrease'>-</button>
        <input type='text' className='value' value='Current Value' readOnly/>
      </fieldset>
      <fieldset id='zfields'>
        <label htmlFor='zfields'>Z</label>
        <button className='increase'>+</button>
        <button className='decrease'>-</button>
        <input type='text' className='value' value='Current Value' readOnly/>
      </fieldset>
    </form>
  )
}

export default Calibration;