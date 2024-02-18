
const Contact = () => {
    return (
        <div className="flex gap-2 items-center hover:bg-sky-500 rounded px-2 py-1 cursor-pointer">
            <div className="avatar online">
                <div className="w-12 rounded-full">
                    <img src="https://avatar.iran.liara.run/public/27" alt="User Avatar" />

                </div>
            </div>

            <div className="flex flex-col flex-1">
                <div className="flex gap-3 justify-between">
                    <p className="font-bold text-gray-200">John Doe</p>
                    <span className="text-xl"></span>
                </div>

                <div className="divider my-0 py-0 h-1"></div>

            </div>

        </div>
    )
}

export default Contact
