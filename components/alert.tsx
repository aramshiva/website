import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";

export default function Alert({ children }) {
  return (
    <div className="p-9">
      <div className="rounded-md bg-yellow-100 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <ExclamationTriangleIcon
              className="h-5 w-5 text-yellow-800"
              aria-hidden="true"
            />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-bold text-yellow-900">
              Attention needed
            </h3>
            <div className="mt-2 text-sm text-yellow-800">
              <p>{children}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
