function assignColors(categoryName)  {
    switch (categoryName) {
        case 'sapling deshielding':
            return '#48F9B8'
        case 'sapling shielded':
            return '#52F25D'                   
        case 'sapling shielding':
            return '#B5F948'
        case 'sprout deshielding':
            return '#F93611'                   
        case 'sprout shielded':
            return '#F21D81'
        case 'sprout shielding':
            return '#BE11F9' 
        case 'transparent':
            return '#2D8DFA'
        case 'transparent coinbase':
            return '#2EADDB'
        case 'shielded coinbase':
            return '#F5A92D'                    
        default:
            return '#AAAAAA'                                                                                      
    }
}

export default assignColors