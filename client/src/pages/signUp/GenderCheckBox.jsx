
const GenderCheckBox = () => {
    return (
        <div className='flex'>

            <div className='form-control'>
                <label className='label gap-2 cursor-pointer'>Male</label>
                <input type="checkbox" className='checkbox border-slate-900' />
            </div>

            <div className='form-control'>
                <label className='label gap-2 cursor-pointer'>Female</label>
                <input type="checkbox" className='checkbox border-slate-900' />
            </div>

        </div>
    )
}

export default GenderCheckBox
