import { Field, reduxForm } from 'redux-form'

const keyboardKeys = [
    {
        main: 1
    },{
        main: 2,
        subs: ["a", "b", "c"]
    },{
        main: 3,
        subs: ["d", "e", "f"]
    },{
        main: 4,
        subs: ["g", "h", "i"]
    },{
        main: 5,
        subs: ["j", "k", "l"]
    },{
        main: 6,
        subs: ["m", "n", "o"]
    },{
        main: 7,
        subs: ["p", "q", "r", "s"]
    },{
        main: 8,
        subs: ["t", "u", "v"]
    },{
        main: 9,
        subs: ["w", "x", "y", "z"]
    },{
        main: "*"
    },{
        main: 0,
        subs: ["+"]
    },{
        main: "#"
    }
]

const keyClicked = (key, fields) => {
    console.log(key);
    fields.displayString.onChange(key.main)
}

let Keyboard = () => 
        <div className="keyboard">
            {
                keyboardKeys.map(key => 
                    <div key={key.main} className="key" onClick={()=>keyClicked(key, fields)}>
                        <div className="main">{key.main}</div>
                        {key.subs &&
                            <div className="subs">
                            {
                                key.subs.map(sub => 
                                    <span key={sub}>{sub}</span>
                                )
                            }
                            </div>
                        }
                    </div>
                )
            }
        </div>

Keyboard = reduxForm({
    form: 'display'
  })(Keyboard)

export default Keyboard;