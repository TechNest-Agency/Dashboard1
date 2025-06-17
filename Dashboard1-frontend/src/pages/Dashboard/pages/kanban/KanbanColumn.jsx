import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import KanbanCard from './KanbanCard';
import { MoreHorizontal, Plus } from 'lucide-react';

const KanbanColumn = ({ column }) => {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  return (
    <div className="w-80 bg-white border border-gray-200 rounded-2xl p-4 shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">{column.title}</h3>
        <MoreHorizontal className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
      </div>

      <div ref={setNodeRef} className="space-y-3 min-h-[200px]">
        <SortableContext items={column.tasks.map(t => t.id)} strategy={verticalListSortingStrategy}>
          {column.tasks.map(task => (
            <KanbanCard key={task.id} task={task} />
          ))}
        </SortableContext>
      </div>

      <button className="w-full mt-4 p-3 border border-dashed border-gray-300 rounded-xl text-gray-500 hover:border-gray-400 hover:text-gray-700 transition-colors flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100">
        <Plus className="w-4 h-4" />
        Add New Item
      </button>
    </div>
  );
};

export default KanbanColumn;
