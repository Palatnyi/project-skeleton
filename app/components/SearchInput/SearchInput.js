/**
 * Created by andrew on 3/15/2017.
 */
import React from "react";

function SearchInput({label = false, onChange, value}) {
    return (
        <div>
            <div>
                {label && <label>label</label>}
            </div>
            <div>
                <input type="text" value={value} onChange={(event) => {onChange(event.target.value)}}/>
            </div>
        </div>
    );
}

export default SearchInput;