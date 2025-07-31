'use client'
import { FaShoppingCart, FaIndustry, FaStore, FaWarehouse, FaBuilding } from 'react-icons/fa';

const habilitaciones = [
  { icon: <FaShoppingCart size={40} />, label: 'COMERCIOS' },
  { icon: <FaIndustry size={40} />, label: 'INDUSTRIAS' },
  { icon: <FaStore size={40} />, label: 'LOCALES COMERCIALES' },
  { icon: <FaWarehouse size={40} />, label: 'DEPOSITOS' },
  { icon: <FaBuilding size={40} />, label: 'OFICINAS' },
];

export default function Services() {
  return (
    <section className="text-center py-12">
      <h2 className="text-3xl font-bold text-blue-800">Habilitaciones Comerciales</h2>
      <div className="h-1 w-24 bg-green-600 mx-auto my-4"></div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-center mt-10">
        {habilitaciones.map(({ icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-4">
            <div className="rounded-full border-2 border-blue-800 p-6 relative">
              <div className="absolute inset-0 rounded-full border border-dashed border-blue-800 animate-pulse opacity-10" />
              <div className="text-blue-800">{icon}</div>
            </div>
            <p className="text-gray-700 text-sm font-semibold text-center">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
