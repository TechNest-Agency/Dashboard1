

const SampleTables = () => {
  
  
  const tableData = [
    { name: 'Frozen Yogurt', calories: 159, fat: 6, carbs: 24, protein: 4, icon: 'https://cdn-icons-png.flaticon.com/512/3126/3126691.png' },
    { name: 'Ice cream sandwich', calories: 237, fat: 6, carbs: 24, protein: 4, icon: 'https://cdn-icons-png.flaticon.com/512/3126/3126676.png' },
    { name: 'Eclair', calories: 262, fat: 6, carbs: 24, protein: 4, icon: 'https://cdn-icons-png.flaticon.com/512/3126/3126587.png' },
    { name: 'Cupcake', calories: 305, fat: 6, carbs: 24, protein: 4, icon: 'https://cdn-icons-png.flaticon.com/512/3126/3126593.png' },
    { name: 'Gingerbread', calories: 356, fat: 6, carbs: 24, protein: 4, icon: 'https://cdn-icons-png.flaticon.com/512/3126/3126659.png' },
  ];

  
  // Column configuration with icons
  const columns = [
    { 
      key: 'name', 
      header: 'DESSERT (100G SERVING)', 
      icon: 'https://cdn-icons-png.flaticon.com/512/3172/3172555.png' 
    },
    { 
      key: 'calories', 
      header: 'CALORIES', 
      icon: 'https://cdn-icons-png.flaticon.com/512/1046/1046857.png' 
    },
    { 
      key: 'fat', 
      header: 'FAT (G)', 
      icon: 'https://cdn-icons-png.flaticon.com/512/3079/3079163.png' 
    },
    { 
      key: 'carbs', 
      header: 'CARBS (G)', 
      icon: 'https://cdn-icons-png.flaticon.com/512/3079/3079163.png' 
    },
    { 
      key: 'protein', 
      header: 'PROTEIN (G)', 
      icon: 'https://cdn-icons-png.flaticon.com/512/3079/3079163.png' 
    },
  ];

  return (
    <div className='min-h-screen py-8 px-4 sm:px-6 lg:px-8 '>
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header with theme toggle */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/3172/3172555.png" 
                alt="Dessert" 
                className="w-6 h-6"
              />
              Nutrition Dashboard
            </h1>
            <p className="text-sm opacity-75">Nutritional values per 100g serving</p>
          </div>
        
        </div>

        {/* Basic Table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/2936/2936886.png" 
                alt="Basic" 
                className="w-5 h-5"
              />
              Basic Nutrition Table
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className=''>
                <tr>
                  {columns.map((col) => (
                    <th 
                      key={col.key}
                      scope="col" 
                      className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider"
                    >
                      <div className="flex items-center gap-2">
                        <img src={col.icon} alt={col.header} className="w-4 h-4 opacity-70" />
                        {col.header}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {tableData.map((item, index) => (
                  <tr 
                    key={index} 
                    className=''
                  >
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <img src={item.icon} alt={item.name} className="w-8 h-8" />
                        <span className="font-medium">{item.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <img 
                          src="https://cdn-icons-png.flaticon.com/512/1046/1046857.png" 
                          alt="Calories" 
                          className="w-4 h-4 opacity-70"
                        />
                        {item.calories}
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      {item.fat}g
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      {item.carbs}g
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      {item.protein}g
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Compact Table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/3142/3142029.png" 
                alt="Compact" 
                className="w-5 h-5"
              />
              Compact View
            </h2>
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
              High Density
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className=''>
                <tr>
                  {columns.map((col) => (
                    <th 
                      key={col.key}
                      scope="col" 
                      className="px-3 py-2 text-left text-xs font-medium uppercase tracking-wider"
                    >
                      <div className="flex items-center gap-1">
                        <img src={col.icon} alt={col.header} className="w-3 h-3 opacity-70" />
                        <span className="truncate">{col.header.split(' ')[0]}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {tableData.slice(0, 3).map((item, index) => (
                  <tr 
                    key={index} 
                    className=''
                  >
                    <td className="px-3 py-2 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <img src={item.icon} alt={item.name} className="w-6 h-6" />
                        <span className="text-sm truncate max-w-[120px]">{item.name}</span>
                      </div>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm">
                      {item.calories}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm">
                      {item.fat}g
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm">
                      {item.carbs}g
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm">
                      {item.protein}g
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className='p-4 rounded-lg flex items-center bg-purple-200 gap-3 '>
            <div className='p-3 rounded-full bg-white '>
              <img 
                src="https://cdn-icons-png.flaticon.com/512/1046/1046857.png" 
                alt="Calories" 
                className="w-6 h-6"
              />
            </div>
            <div>
              <p className="text-sm opacity-75">Avg. Calories</p>
              <p className="font-bold">264</p>
            </div>
          </div>

          <div className='p-4 rounded-lg flex items-center bg-purple-200 gap-3'>
            <div className='p-3 rounded-full bg-white '>
              <img 
                src="https://cdn-icons-png.flaticon.com/512/3079/3079163.png" 
                alt="Protein" 
                className="w-6 h-6"
              />
            </div>
            <div>
              <p className="text-sm opacity-75">Avg. Protein</p>
              <p className="font-bold">4g</p>
            </div>
          </div>

          <div className='p-4 rounded-lg flex items-center bg-purple-200 gap-3 '>
            <div className='p-3 rounded-full bg-white'>
              <img 
                src="https://cdn-icons-png.flaticon.com/512/3079/3079163.png" 
                alt="Carbs" 
                className="w-6 h-6"
              />
            </div>
            <div>
              <p className="text-sm opacity-75">Avg. Carbs</p>
              <p className="font-bold">24g</p>
            </div>
          </div>

          <div className='p-4 rounded-lg flex items-center gap-3 bg-purple-100'>
            <div className='p-3 rounded-full bg-white '>
              <img 
                src="https://cdn-icons-png.flaticon.com/512/3079/3079163.png" 
                alt="Fat" 
                className="w-6 h-6"
              />
            </div>
            <div>
              <p className="text-sm opacity-75">Avg. Fat</p>
              <p className="font-bold">6g</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleTables;