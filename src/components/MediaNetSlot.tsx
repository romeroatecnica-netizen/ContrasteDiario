interface MediaNetSlotProps {
  slotId: string;
  placementLabel: string;
}

/**
 * Contenedor dedicado para anuncios contextuales tipo Media.net.
 * - Mantiene altura mínima reservada (min-h-[110px]) para evitar Cumulative Layout Shift (CLS).
 * - Oculto automáticamente en impresión (@media print / .no-print).
 * - Para activar Media.net en producción, inserta el script de tu cuenta en index.html
 *   y vincula este contenedor mediante su atributo data-medianet-slot.
 */
export function MediaNetSlot({slotId, placementLabel}: MediaNetSlotProps) {
  return (
    <aside
      aria-label={`Espacio publicitario ${placementLabel}`}
      className="no-print my-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div
        id={slotId}
        data-medianet-slot={slotId}
        className="w-full min-h-[110px] rounded-xl border border-[#E2E8F0] bg-white px-6 py-4 flex flex-col items-center justify-center text-center"
      >
        {/* Sustituir este bloque interior por el código de unidad Media.net correspondiente a {slotId} */}
        <p className="text-xs font-medium text-slate-400">
          Espacio publicitario reservado · {placementLabel}
        </p>
        <p className="text-xs text-slate-400 mt-1">
          Bloque contextual Media.net sin superposición sobre la matriz editorial (altura mínima reservada 110 px).
        </p>
      </div>
    </aside>
  );
}
