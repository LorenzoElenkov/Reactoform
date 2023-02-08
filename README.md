# Reactoform v0.1
API |Examples|
|--|--|

### Installation

    npm install @lorenzoelenkov/reactoform

### Quickstart

    
    import { Form } from '@lorenzoelenkov/reactoform
    
    const formInputs = [
	    { 
		    label: 'Email',
		    type: 'text',
		    validation: {
			    email: true
		    }
	    },
	    {
		    label: 'Password',
		    type: 'password',
		    validation: {
			    pattern: { value: /[A-Za-z0-9\!\@\#]/, error: 'Password must contain one lowercase, one uppercase, one number and one special character' },
			    minLength: { value: 8, error: 'Password must be at least 8 characters' }
		    }
	    }
    ]
    
    const App = () => {
	    return (
		    <div className="App">
			    <Form data={formInputs} onSubmit={value => console.log(value)}
		    </div>
	    )
    }
    

There are other types and options for inputs. You can checkout the API or Examples.

### Styling
Currently, you can include `customClass` field in `formInputs` object for each input. With a `customClass` set, you can style your labels, inputs and error spans through:

 - Vanilla CSS
 - CSS Modules
 - SASS/LESS

*Other styling options will be integrated in the future, for reference look at the roadmap*

### Roadmap

**Q1 2023**

 - Invalid inputs have a red border
 - Checkbox input
 - Multi-select input
 - Switch input
 - Animations

**Q2 2023**

 - Material UI integration
 - AntD UI integration

 
