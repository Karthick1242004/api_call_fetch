import React, { useMemo } from 'react'
import data from '../components/data.json'
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table'

function Maintine() {
  const columns = useMemo(()=>[
    {
      accessorKey: 'name',
      header: 'Product Name'
    },
    {
      accessorKey: 'price',
      header: 'Product Price'
    },
  ])
  const table = useMantineReactTable({columns,data})
  return (
    <div>
      <MantineReactTable table={table}/>
    </div>
  )
}

export default Maintine
