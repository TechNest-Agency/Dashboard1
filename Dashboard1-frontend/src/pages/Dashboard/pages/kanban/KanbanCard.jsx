import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Paperclip, MessageCircle, MoreHorizontal } from 'lucide-react';

const KanbanCard = ({ task }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`bg-white border border-gray-200 rounded-xl shadow-sm cursor-grab active:cursor-grabbing p-4 transition-transform ${
        isDragging ? 'opacity-50 rotate-2 scale-95' : 'hover:shadow-md'
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <span
          className={`px-2 py-1 text-xs font-medium rounded-md ${task.categoryColor} text-white`}
        >
          {task.category}
        </span>
        <MoreHorizontal className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
      </div>

      <h4 className="font-semibold text-gray-800 mb-2 leading-tight">
        {task.title}
      </h4>

      {task.image && (
        <div className="mb-3 rounded-lg overflow-hidden">
          <img
            src={task.image}
            alt="Task"
            className="w-full h-32 object-cover"
          />
        </div>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-gray-500 text-sm">
          {task.attachments > 0 && (
            <div className="flex items-center gap-1">
              <Paperclip className="w-4 h-4" />
              <span>{task.attachments}</span>
            </div>
          )}
          {task.comments > 0 && (
            <div className="flex items-center gap-1">
              <MessageCircle className="w-4 h-4" />
              <span>{task.comments}</span>
            </div>
          )}
        </div>

        <div className="flex -space-x-2">
          {task.assignees.map((assignee, index) => (
            <div
              key={index}
              className="w-7 h-7 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-sm"
            >
              {assignee}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KanbanCard;
