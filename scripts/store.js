
const store = (function(){
    const foo = 'bar';
    
    
    const items = [
          { id: cuid(), name: 'apples', checked: false },
          { id: cuid(), name: 'oranges', checked: false },
          { id: cuid(), name: 'milk', checked: true },
          { id: cuid(), name: 'bread', checked: false }
        ];
    const hideCheckedItems = false;
    const searchTerm = '';

    const findById = function(id) {
        return this.items.find(item => item.id === id);
    }

    const addItem = function(name) {
        try {
            Item.validateName(name);
            this.items.push(Item.create(name));
        } catch(error) {
            console.log(`Add item error ${error.message}`);
        }
    }
    
    const findAndToggleChecked = function(id) {
        let getItemId = this.findById(id);
        getItemId.checked = !getItemId.checked;
    }

    const findAndUpdateName = function(id, newName) {
        try {
            Item.validateName(newName);
            this.findById(id).name = newName;
        } catch(error) {
            console.log(`Cannot update name: ${error.message}`);
        }
    }

    const findAndDelete = function(id) {
        const itemIndex = this.findById(id);
        this.items.splice(itemIndex, 1);
    }

    const toggleCheckedFilter = function() {
        this.hideCheckedItems = !this.hideCheckedItems;
    }

    const setSearchTerm = function(val) {
        this.searchTerm = val;
    }

    return {
        items: items,
        hideCheckedItems: hideCheckedItems,
        searchTerm: searchTerm,
        findById,
        addItem,
        findAndToggleChecked,
        findAndUpdateName,
        findAndDelete,
        toggleCheckedFilter,
        setSearchTerm      
    };

}());