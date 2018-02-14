const clearErrors = form => {
    Array.from( form.querySelectorAll('.has-danger') ).map( el => el.classList.remove('has-danger') )
    Array.from( form.querySelectorAll('small') ).map( el => el.remove() )
}

const willvalidate =  form => {
	clearErrors(form)
	let firstError=null
	Array.from( form ).map( field => {
		if (field.willValidate && !field.checkValidity()) 
		{
		  if (!firstError) firstError = field
		  const small     = document.createElement('small')
		  
		  if(field.getAttribute("errorMessage"))
			small.innerHTML = field.getAttribute("errorMessage")
		  else 
			small.innerHTML = field.validationMessage
			
		  small.className = 'form-control-feedback'
		  field.parentElement.appendChild(small)
		  field.parentElement.classList.add('has-danger')
		} 
	})
	if (firstError) firstError.focus()
	return firstError === null
}


