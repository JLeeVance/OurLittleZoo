
function SearchBar({ onSearchChange , formData }){



    return(
        <div className="ui container">
            <form className="ui form">
                <input value={formData} type="text" onChange={(e) => onSearchChange(e.target.value)} />
            </form>
        </div>
    )
}

export default SearchBar;