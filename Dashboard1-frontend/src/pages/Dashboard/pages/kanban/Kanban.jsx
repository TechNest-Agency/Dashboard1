import React, { useState } from 'react';
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { arrayMove, SortableContext } from '@dnd-kit/sortable';
import KanbanColumn from './KanbanColumn';
import KanbanCard from './KanbanCard';

const initialData = [
  {
    id: 'in-progress',
    title: 'In Progress',
    tasks: [
      {
        id: '1',
        title: 'Research FAQ page UX',
        description: 'UX research for FAQ page improvements',
        category: 'UX',
        categoryColor: 'bg-green-500',
        attachments: 2,
        comments: 1,
        assignees: ['👨‍💼', '👩‍💻', '👨‍🎨'],
      },
      {
        id: '2',
        title: 'Review JavaScript code',
        description: 'Code review for JavaScript modules',
        category: 'Code Review',
        categoryColor: 'bg-red-500',
        attachments: 2,
        comments: 4,
        assignees: ['👩‍💻', '👨‍💼'],
      },
    ],
  },
  {
    id: 'in-review',
    title: 'In Review',
    tasks: [
      {
        id: '3',
        title: 'Review completed Apps',
        description: 'Final review of completed applications',
        category: 'Dashboard',
        categoryColor: 'bg-cyan-500',
        attachments: 5,
        comments: 10,
        assignees: ['👨‍💼', '👩‍💻', '👨‍🎨'],
      },
      {
        id: '4',
        title: 'Plant care guide',
        description: 'Creating comprehensive plant care documentation',
        category: 'Image',
        categoryColor: 'bg-orange-500',
        attachments: 0,
        comments: 0,
        assignees: ['👩‍🌾'],
        image: '/images (12).jpeg',
      },
    ],
  },
  {
    id: 'done',
    title: 'Done',
    tasks: [
      {
        id: '5',
        title: 'Forms & tables section',
        description: 'Completed forms and tables implementation',
        category: 'App',
        categoryColor: 'bg-gray-500',
        attachments: 7,
        comments: 2,
        assignees: ['👨‍💻', '👩‍💻', '👨‍🎨'],
      },
      {
        id: '6',
        title: 'Completed charts & maps',
        description: 'All charts and maps are now functional',
        category: 'Charts & Maps',
        categoryColor: 'bg-purple-500',
        attachments: 1,
        comments: 10,
        assignees: ['👨‍💼'],
      },
    ],
  },
];

const Kanban = () => {
  const [columns, setColumns] = useState(initialData);
  const [activeTask, setActiveTask] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 },
    })
  );

  const handleDragStart = (event) => {
    const { active } = event;
    const task = columns
      .flatMap((col) => col.tasks)
      .find((task) => task.id === active.id);
    setActiveTask(task || null);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    setActiveTask(null);
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    const activeColumn = columns.find((col) =>
      col.tasks.some((task) => task.id === activeId)
    );
    const overColumn =
      columns.find((col) => col.id === overId) ||
      columns.find((col) => col.tasks.some((task) => task.id === overId));

    if (!activeColumn || !overColumn) return;

    if (activeColumn.id !== overColumn.id) {
      setColumns((prev) => {
        const activeColumnIndex = prev.findIndex(
          (col) => col.id === activeColumn.id
        );
        const overColumnIndex = prev.findIndex(
          (col) => col.id === overColumn.id
        );
        const movedTask = activeColumn.tasks.find(
          (task) => task.id === activeId
        );

        if (!movedTask) return prev;

        const newColumns = [...prev];

        newColumns[activeColumnIndex] = {
          ...activeColumn,
          tasks: activeColumn.tasks.filter((task) => task.id !== activeId),
        };

        newColumns[overColumnIndex] = {
          ...overColumn,
          tasks: [...overColumn.tasks, movedTask],
        };

        return newColumns;
      });
    } else {
      const activeIndex = activeColumn.tasks.findIndex(
        (task) => task.id === activeId
      );
      const overIndex = activeColumn.tasks.findIndex(
        (task) => task.id === overId
      );

      if (activeIndex !== overIndex) {
        setColumns((prev) => {
          const columnIndex = prev.findIndex(
            (col) => col.id === activeColumn.id
          );
          const newColumns = [...prev];
          newColumns[columnIndex] = {
            ...activeColumn,
            tasks: arrayMove(
              activeColumn.tasks,
              activeIndex,
              overIndex
            ),
          };
          return newColumns;
        });
      }
    }
  };

  return (
    <div className="flex h-screen bg-white text-black">
      <div className="flex-1 p-6 overflow-x-auto">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Kanban</h1>
          <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 text-white rounded-lg transition-colors">
            + Add New
          </button>
        </div>

        <DndContext
          sensors={sensors}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <div className="flex gap-6 min-w-max">
            {columns.map((column) => (
              <SortableContext
                key={column.id}
                items={column.tasks.map((t) => t.id)}
              >
                <KanbanColumn column={column} />
              </SortableContext>
            ))}
          </div>

          <DragOverlay>
            {activeTask ? (
              <div className="p-4 rounded-lg bg-gray-800 shadow-lg rotate-2 opacity-90 w-64">
                <KanbanCard task={activeTask} />
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>
      </div>
    </div>
  );
};

export default Kanban;
