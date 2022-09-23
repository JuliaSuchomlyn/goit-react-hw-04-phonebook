import PropTypes from 'prop-types';
import { FilterByName } from "./Filter.styled"

export const Filter = ({filter, onChange}) => {
    

        return (
            <FilterByName>
                Find contacts by name
                <input
                    type="text"
                    name="filter"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={filter}
                    onChange={onChange}
                />
            </FilterByName>
        )
}
    
Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}