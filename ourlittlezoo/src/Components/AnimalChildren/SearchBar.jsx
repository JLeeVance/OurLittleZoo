
function SearchBar({ onSearchChange , formData }){



    return(
        <div>
            <form className="ui form">
                <input placeholder="Search by name..." className="ui form input" value={formData} type="text" onChange={(e) => onSearchChange(e.target.value)} />
            </form>
        </div>
    )
}

export default SearchBar;