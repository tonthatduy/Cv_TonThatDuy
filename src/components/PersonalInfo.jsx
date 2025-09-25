const PersonalInfo = ({icon, label, link, color = "text-gray-700"}) => {
    return(
        <div className="flex items-center space-x-2 my-2">
            {/* Icon/logo */}
            <img src={icon} alt="icon" className="w-5 h-5" />

            {/* Nếu có link thì hiển thị thẻ <a>, ngược lại chỉ hiển thị text */}
            {link ? (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${color} font-medium hover:underline`}
                >
                    {label}
                </a>
            ) : (
                <span className={`${color} font-medium`}>{label}</span>
            )}
        </div>
    );
};
export default PersonalInfo;