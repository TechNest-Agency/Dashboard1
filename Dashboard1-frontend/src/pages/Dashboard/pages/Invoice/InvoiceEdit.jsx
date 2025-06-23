import React, { useState } from 'react';
import { 
  Heart, 
  Send, 
  Eye, 
  Save, 
  DollarSign, 
  Plus, 
  X, 
  ChevronDown,
  Settings
} from 'lucide-react';

const InvoiceEdit = () => {
  const [invoiceData, setInvoiceData] = useState({
    invoiceNumber: '5036',
    dateIssued: '2025-06-19',
    dueDate: '2025-06-25',
    clientName: 'Andrew Burns',
    clientCompany: 'Richardson and Sons LLC',
    clientAddress: '78083 Laura Pines, Bhutan',
    clientPhone: '(687) 660-2473',
    clientEmail: 'pwillis@cross.org',
    totalDue: 12110.55,
    bankName: 'American Bank',
    country: 'United States',
    iban: 'ETD95476213874685',
    swiftCode: 'BR91905',
    salesperson: 'Tom Cook',
    thanksMessage: 'Thanks for your business',
    note: 'It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!',
    subtotal: 1800,
    discount: 28,
    tax: 21,
    total: 1690,
    items: [
      {
        id: '1',
        name: 'App Customization',
        description: 'Designed UI kit & app pages.',
        cost: 24,
        hours: 2,
        price: 48
      }
    ]
  });

  const [paymentTerms, setPaymentTerms] = useState(true);
  const [clientNotes, setClientNotes] = useState(false);
  const [paymentStub, setPaymentStub] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('Bank Account');

  const addItem = () => {
    const newItem = {
      id: Date.now().toString(),
      name: '',
      description: '',
      cost: 0,
      hours: 0,
      price: 0
    };
    setInvoiceData(prev => ({
      ...prev,
      items: [...prev.items, newItem]
    }));
  };

  const removeItem = (id) => {
    setInvoiceData(prev => ({
      ...prev,
      items: prev.items.filter(item => item.id !== id)
    }));
  };

  const updateItem = (id, field, value) => {
    setInvoiceData(prev => ({
      ...prev,
      items: prev.items.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      )
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200 px-4 sm:px-6 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <Heart className="w-8 h-8 text-purple-500 fill-current" />
            <span className="text-xl font-semibold text-gray-900">Vuexy</span>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-4 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors text-white">
              <Send className="w-4 h-4" />
              <span>Send Invoice</span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Settings className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row">
        {/* Main Content */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8">
          {/* Company Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="w-8 h-8 text-purple-500 fill-current" />
              <span className="text-2xl font-bold text-gray-900">Vuexy</span>
            </div>
            <div className="text-gray-600 space-y-1 text-sm sm:text-base">
              <p>Office 149, 450 South Brand Brooklyn</p>
              <p>San Diego County, CA 91905, USA</p>
              <p>+1 (123) 456 7891, +44 (876) 543 2198</p>
            </div>
          </div>

          {/* Invoice Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <label className="text-sm text-gray-600 mb-2 block font-medium">Invoice:</label>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-500">#</span>
                  <input
                    type="text"
                    value={invoiceData.invoiceNumber}
                    onChange={(e) => setInvoiceData(prev => ({ ...prev, invoiceNumber: e.target.value }))}
                    className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-2 block font-medium">Date Issued:</label>
                <input
                  type="date"
                  value={invoiceData.dateIssued}
                  onChange={(e) => setInvoiceData(prev => ({ ...prev, dateIssued: e.target.value }))}
                  className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none w-full transition-colors"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-2 block font-medium">Due Date:</label>
                <input
                  type="date"
                  value={invoiceData.dueDate}
                  onChange={(e) => setInvoiceData(prev => ({ ...prev, dueDate: e.target.value }))}
                  className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none w-full transition-colors"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <label className="text-sm text-gray-600 mb-2 block font-medium">Total Due:</label>
                <p className="text-2xl font-bold text-gray-900">${invoiceData.totalDue.toLocaleString()}</p>
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-2 block font-medium">Bank Name:</label>
                <input
                  type="text"
                  value={invoiceData.bankName}
                  onChange={(e) => setInvoiceData(prev => ({ ...prev, bankName: e.target.value }))}
                  className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none w-full transition-colors"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-2 block font-medium">Country:</label>
                <input
                  type="text"
                  value={invoiceData.country}
                  onChange={(e) => setInvoiceData(prev => ({ ...prev, country: e.target.value }))}
                  className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none w-full transition-colors"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-2 block font-medium">IBAN:</label>
                <input
                  type="text"
                  value={invoiceData.iban}
                  onChange={(e) => setInvoiceData(prev => ({ ...prev, iban: e.target.value }))}
                  className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none w-full transition-colors"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-2 block font-medium">SWIFT Code:</label>
                <input
                  type="text"
                  value={invoiceData.swiftCode}
                  onChange={(e) => setInvoiceData(prev => ({ ...prev, swiftCode: e.target.value }))}
                  className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none w-full transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Client Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Invoice To:</h3>
              <div className="relative">
                <select
                  value={invoiceData.clientName}
                  onChange={(e) => setInvoiceData(prev => ({ ...prev, clientName: e.target.value }))}
                  className="bg-white border border-gray-300 rounded-lg px-3 py-2 pr-10 text-gray-900 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none w-full appearance-none transition-colors"
                >
                  <option value="Andrew Burns">Andrew Burns</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
              
              <div className="mt-4 space-y-2 text-gray-700">
                <p className="font-medium">{invoiceData.clientName}</p>
                <p>{invoiceData.clientCompany}</p>
                <p>{invoiceData.clientAddress}</p>
                <p>{invoiceData.clientPhone}</p>
                <p>{invoiceData.clientEmail}</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Bill To:</h3>
              <div className="space-y-2 text-gray-700">
                <p><span className="text-gray-500 font-medium">Total Due:</span> ${invoiceData.totalDue.toLocaleString()}</p>
                <p><span className="text-gray-500 font-medium">Bank Name:</span> {invoiceData.bankName}</p>
                <p><span className="text-gray-500 font-medium">Country:</span> {invoiceData.country}</p>
                <p><span className="text-gray-500 font-medium">IBAN:</span> {invoiceData.iban}</p>
                <p><span className="text-gray-500 font-medium">SWIFT Code:</span> {invoiceData.swiftCode}</p>
              </div>
            </div>
          </div>

          {/* Items Table */}
          <div className="mb-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
              {/* Desktop Table Header */}
              <div className="hidden lg:grid lg:grid-cols-12 gap-4 p-4 border-b border-gray-200 font-semibold text-gray-700 bg-gray-100">
                <div className="col-span-4">Item</div>
                <div className="col-span-2">Cost</div>
                <div className="col-span-2">Hours</div>
                <div className="col-span-2">Price</div>
                <div className="col-span-2">Discount</div>
              </div>

              {invoiceData.items.map((item) => (
                <div key={item.id} className="border-b border-gray-200 last:border-b-0">
                  {/* Desktop Layout */}
                  <div className="hidden lg:grid lg:grid-cols-12 gap-4 p-4 items-start">
                    <div className="col-span-4">
                      <div className="relative">
                        <select
                          value={item.name}
                          onChange={(e) => updateItem(item.id, 'name', e.target.value)}
                          className="bg-white border border-gray-300 rounded-lg px-3 py-2 pr-10 text-gray-900 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none w-full appearance-none mb-2 transition-colors"
                        >
                          <option value="App Customization">App Customization</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-2 w-4 h-4 text-gray-400" />
                      </div>
                      <textarea
                        value={item.description}
                        onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                        placeholder="Description"
                        className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 text-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none w-full resize-none transition-colors"
                        rows={2}
                      />
                    </div>
                    <div className="col-span-2">
                      <input
                        type="number"
                        value={item.cost}
                        onChange={(e) => updateItem(item.id, 'cost', parseFloat(e.target.value) || 0)}
                        className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none w-full transition-colors"
                      />
                    </div>
                    <div className="col-span-2">
                      <input
                        type="number"
                        value={item.hours}
                        onChange={(e) => updateItem(item.id, 'hours', parseFloat(e.target.value) || 0)}
                        className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none w-full transition-colors"
                      />
                    </div>
                    <div className="col-span-2">
                      <input
                        type="text"
                        value={`$${item.price}`}
                        readOnly
                        className="bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 text-gray-900 w-full"
                      />
                    </div>
                    <div className="col-span-1">
                      <div className="text-center text-gray-500">
                        <p>0%</p>
                        <p>0%</p>
                        <p>0%</p>
                      </div>
                    </div>
                    <div className="col-span-1">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                      >
                        <X className="w-4 h-4 text-gray-500" />
                      </button>
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="lg:hidden p-4 space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1 mr-4">
                        <div className="relative">
                          <select
                            value={item.name}
                            onChange={(e) => updateItem(item.id, 'name', e.target.value)}
                            className="bg-white border border-gray-300 rounded-lg px-3 py-2 pr-10 text-gray-900 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none w-full appearance-none mb-2 transition-colors"
                          >
                            <option value="App Customization">App Customization</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-2 w-4 h-4 text-gray-400" />
                        </div>
                        <textarea
                          value={item.description}
                          onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                          placeholder="Description"
                          className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 text-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none w-full resize-none transition-colors"
                          rows={2}
                        />
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                      >
                        <X className="w-4 h-4 text-gray-500" />
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-gray-600 mb-1 block">Cost</label>
                        <input
                          type="number"
                          value={item.cost}
                          onChange={(e) => updateItem(item.id, 'cost', parseFloat(e.target.value) || 0)}
                          className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none w-full transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-gray-600 mb-1 block">Hours</label>
                        <input
                          type="number"
                          value={item.hours}
                          onChange={(e) => updateItem(item.id, 'hours', parseFloat(e.target.value) || 0)}
                          className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none w-full transition-colors"
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <label className="text-sm text-gray-600 mb-1 block">Price</label>
                        <span className="text-lg font-semibold text-gray-900">${item.price}</span>
                      </div>
                      <div className="text-right">
                        <label className="text-sm text-gray-600 mb-1 block">Discount</label>
                        <span className="text-gray-500">0%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={addItem}
              className="mt-4 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors text-white"
            >
              <Plus className="w-4 h-4" />
              <span>Add Item</span>
            </button>
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-600 mb-2 block font-medium">Salesperson:</label>
                <input
                  type="text"
                  value={invoiceData.salesperson}
                  onChange={(e) => setInvoiceData(prev => ({ ...prev, salesperson: e.target.value }))}
                  className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none w-full transition-colors"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-2 block font-medium">Thanks Message:</label>
                <input
                  type="text"
                  value={invoiceData.thanksMessage}
                  onChange={(e) => setInvoiceData(prev => ({ ...prev, thanksMessage: e.target.value }))}
                  className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none w-full transition-colors"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="text-gray-900 font-medium">${invoiceData.subtotal}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Discount:</span>
                  <span className="text-gray-900 font-medium">${invoiceData.discount}</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600">Tax:</span>
                  <span className="text-gray-900 font-medium">{invoiceData.tax}%</span>
                </div>
                <div className="flex justify-between text-lg font-semibold border-t border-gray-300 pt-4">
                  <span className="text-gray-900">Total:</span>
                  <span className="text-gray-900">${invoiceData.total}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Note Section */}
          <div className="mb-8">
            <label className="text-sm text-gray-600 mb-2 block font-medium">Note:</label>
            <textarea
              value={invoiceData.note}
              onChange={(e) => setInvoiceData(prev => ({ ...prev, note: e.target.value }))}
              className="bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none w-full transition-colors"
              rows={4}
            />
          </div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 border-t border-gray-200 pt-6 gap-4">
            <div className="flex items-center space-x-2">
              <span>© 2025 Made With</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>By Pixinvent</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="#" className="hover:text-purple-600 transition-colors">License</a>
              <a href="#" className="hover:text-purple-600 transition-colors">More Themes</a>
              <a href="#" className="hover:text-purple-600 transition-colors">Documentation</a>
              <a href="#" className="hover:text-purple-600 transition-colors">Support</a>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-full xl:w-80 bg-gray-50 border-t xl:border-t-0 xl:border-l border-gray-200 p-4 sm:p-6">
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-2 xl:grid-cols-1 gap-4">
              <button className="w-full bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors text-white">
                <Eye className="w-4 h-4" />
                <span>Preview</span>
              </button>

              <button className="w-full bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors text-white">
                <Save className="w-4 h-4" />
                <span>Save</span>
              </button>
            </div>

            <button className="w-full bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors text-white">
              <DollarSign className="w-4 h-4" />
              <span>Add Payment</span>
            </button>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-600 mb-2 block font-medium">Accept Payment Via</label>
                <div className="relative">
                  <select
                    value={selectedPaymentMethod}
                    onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                    className="bg-white border border-gray-300 rounded-lg px-3 py-2 pr-10 text-gray-900 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none w-full appearance-none transition-colors"
                  >
                    <option value="Bank Account">Bank Account</option>
                    <option value="PayPal">PayPal</option>
                    <option value="Stripe">Stripe</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700 font-medium">Payment Terms</span>
                  <button
                    onClick={() => setPaymentTerms(!paymentTerms)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      paymentTerms ? 'bg-purple-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        paymentTerms ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700 font-medium">Client Notes</span>
                  <button
                    onClick={() => setClientNotes(!clientNotes)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      clientNotes ? 'bg-purple-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        clientNotes ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700 font-medium">Payment Stub</span>
                  <button
                    onClick={() => setPaymentStub(!paymentStub)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      paymentStub ? 'bg-purple-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        paymentStub ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-4 py-2 rounded-lg font-medium transition-all text-white">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceEdit;