
function SearchBar({ onSearchChange , formData }){



    return(
        <div>
            <form>
                <input value={formData} type="text" onChange={(e) => onSearchChange(e.target.value)} />
            </form>
        </div>
    )
}

export default SearchBar;