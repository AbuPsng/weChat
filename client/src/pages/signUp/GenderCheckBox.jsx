
const GenderCheckBox = ({ onCheckBoxChanges, selectedGender }) => {
    return (
        <div className='flex'>

            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>Male</label>
                <input type="checkbox" checked={selectedGender === "male"} onChange={() => onCheckBoxChanges("male")} className='checkbox border-slate-900' />
            </div>

            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>Female</label>
                <input type="checkbox" checked={selectedGender === "female"} onChange={() => onCheckBoxChanges("female")} className='checkbox border-slate-900' />
            </div>

        </div>
    )
}

export default GenderCheckBox
