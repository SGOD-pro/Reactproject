import React from 'react';

function InputField({ params, formData }) {
    const { name, type, imp, accept, eventChange, readOnly, filedvalue } = params;

    return (
        <div className="rounded-md border-2 relative border-blue-500 w-full flex py-2 text-base ">
            <label htmlFor={name} className="leading-none absolute top-[-3%] -translate-x-1/2 left-1/2 -translate-y-1/2 px-3 text-xs bg-zinc-700 capitalize">{name.replace(/_/g, ' ')} {imp && <span className='text-red-600 text-sm leading-none'>*</span>}</label>
            {(type !== 'select' && type !== 'file') && <input
                className={`rounded-md w-full h-full p-2 outline-none bg-transparent font-thin `}
                type={type}
                name={name}
                id={name}
                required={imp}
                inputMode={type === 'number' ? 'number' : 'text'}
                onChange={eventChange}
                readOnly={readOnly}
                value={formData[name] ? formData[name] : ""}
            />}
            {type === 'file' &&
                <>
                    <input
                        className='rounded-md w-full h-full p-2 outline-none bg-transparent font-thin opacity-0'
                        type={type}
                        name={name}
                        id={name}
                        accept={`${accept && accept}`}
                        onChange={(e) => {
                            // if (e.target.files.length > 0) {
                            //     e.target.nextElementSibling.innerHTML = e.target.files[0].name;
                            // }
                            eventChange(e);
                        }} 
                        required={imp} disabled={readOnly} />
                    <label htmlFor="" className=' absolute top-1/2 -translate-y-1/2 px-2'>{formData[name] ? formData[name] : ""}</label>
                    <label htmlFor={name} className=' absolute rounded-full  bg-zinc-600 px-2 top-1/2 -translate-y-1/2 right-0'>Choose File</label>
                </>
            }
            {type === 'select' &&
                <select 
                name={name} 
                id={name} 
                className={`w-full bg-transparent rounded-md text-base px-3 py-1 flex items-center gap-1 outline-none capitalize font-thin`} 
                required={imp} 
                onChange={eventChange} 
                disabled={readOnly} 
                value={formData[name]}>

                    <option className='bg-zinc-600 capitalize' value={null} >--Select--</option>
                    
                    {params.options.map((item) => (
                        <option className='bg-zinc-600 capitalize' value={item} key={item}>{item}</option>
                    ))}

                </select>
            }
        </div>
    );
}

export default InputField;
