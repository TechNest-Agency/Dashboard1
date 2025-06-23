import React from 'react'

export default function WizardPropertyArea() {
    return (
    <div className="">
      <form>
        {/* Total Area and Carpet Area */}
        <div className="flex flex-wrap gap-5 mb-5">
          <div className="flex-1 min-w-[200px]">
            <label className="block font-medium mb-1">Total Area </label>
            <input 
              type="number" 
              placeholder='1000'
              className="w-full p-2 border  rounded focus:ring-2 focus:ring-purple-200 focus:border-purple-500 outline-none"
            />
          </div>
          <div className="flex-1 min-w-[200px]">
            <label className="block font-medium mb-1">Carpet Area</label>
            <input 
              type="number"
               placeholder='800' 
              className="w-full p-2 border  rounded focus:ring-2 focus:ring-purple-200 focus:border-purple-500 outline-none"
            />
          </div>
        </div>

        {/* Plot Area and Available From */}
        <div className="flex flex-wrap gap-5 mb-5">
          <div className="flex-1 min-w-[200px]">
            <label className="block font-medium mb-1">Plot Area</label>
            <input 
              type="number" 
               placeholder='800'
              className="w-full p-2 border  rounded focus:ring-2 focus:ring-purple-200 focus:border-purple-500 outline-none"
            />
          </div>
          <div className="flex-1 min-w-[200px]">
            <label className="block font-medium mb-1">Available From</label>
            <input 
              type="date" 
              className="w-full p-2 border  rounded focus:ring-2 focus:ring-purple-200 focus:border-purple-500 outline-none"
            />
          </div>
        </div>

        {/* Possession Status and Transaction Type */}
        <div className="flex flex-wrap gap-5 mb-5">
          <div className="flex-1 min-w-[200px]">
            <label className="block font-medium mb-1">Possession Status</label>
            <div className="flex flex-col gap-2">
              <label className="inline-flex items-center">
                <input 
                  type="radio" 
                  name="possessionStatus" 
                  value="Under Construction" 
                  defaultChecked
                  className="text-purple-500  focus:ring-purple-500"
                />
                <span className="ml-2">Under Construction</span>
              </label>
              <label className="inline-flex items-center">
                <input 
                  type="radio" 
                  name="possessionStatus" 
                  value="Ready to move" 
                  className="text-purple-500  focus:ring-purple-500"
                />
                <span className="ml-2">Ready to move</span>
              </label>
            </div>
          </div>
          <div className="flex-1 min-w-[200px]">
            <label className="block font-medium mb-1">Transaction Type</label>
            <div className="flex flex-col gap-2">
              <label className="inline-flex items-center">
                <input 
                  type="radio" 
                  name="transactionType" 
                  value="Resale" 
                  defaultChecked
                  className="text-purple-500  focus:ring-purple-500"
                />
                <span className="ml-2">Resale</span>
              </label>
              <label className="inline-flex items-center">
                <input 
                  type="radio" 
                  name="transactionType" 
                  value="New Property" 
                  className="text-purple-500 border-purple-500 focus:ring-purple-500"
                />
                <span className="ml-2">New Property</span>
              </label>
            </div>
          </div>
        </div>

        {/* Facing Main Road and Gated Colony.................... */}
        <div className="flex flex-wrap gap-5 mb-5">
          <div className="flex-1 min-w-[200px]">
            <label className="block font-medium mb-1">Is Property Facing Main Road?</label>
            <div className="flex gap-4">
              <label className="inline-flex items-center">
                <input 
                  type="radio" 
                  name="facingMainRoad" 
                  value="Yes" 
                  defaultChecked
                  className="text-purple-500  focus:ring-purple-500"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input 
                  type="radio" 
                  name="facingMainRoad" 
                  value="No" 
                  className="text-purple-500  focus:ring-purple-500"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
          <div className="flex-1 min-w-[200px]">
            <label className="block font-medium mb-1">Gated Colony</label>
            <div className="flex gap-4">
              <label className="inline-flex items-center">
                <input 
                  type="radio" 
                  name="gatedColony" 
                  value="Yes" 
                  defaultChecked
                  className="text-purple-500  focus:ring-purple-500"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input 
                  type="radio" 
                  name="gatedColony" 
                  value="No" 
                  className="text-purple-500  focus:ring-purple-500"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
