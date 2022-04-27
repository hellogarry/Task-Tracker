import { useState } from "react"

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    //event
    const onSubmit = (e) => {
        e.preventDefault() // prevent submit on default
        if(!text){
            alert('please add text')
            return
        }
        onAdd({text,day,reminder})

        //if passed thru reset
        setDay('')
        setText('')
        setReminder(false)
    }

  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Task</label>
            <input 
                type='text' 
                inputholder='Add Tast'
                //from the state above
                value={text}
                //make an event function, change setText (from state) with target.value
                //basically the value of input type in
                onChange={(e) => setText(e.target.value)}
            />
        </div>
        <div className="form-control">
            <label>Day & Time</label>
            <input 
                type='text' 
                inputholder='Add Day & Time'
                value={day}
                onChange={(e) => setDay(e.target.value)}
            />
        </div>
        <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input 
                type='checkbox'
                checked={reminder}
                value={day}
                //to check if toggled
                onChange={(e) => setReminder(e.currentTarget.checked)}
            />
        </div>

        <input type='submit' value='Save Tast' className="btn btn-block"/>
        
    </form>
  )
}

export default AddTask
