import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Show({ origami }) {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        {`Origami "${origami.nombre}"`}
                    </h2>
                </div>
            }
        >
            <Head title={`Origami "${origami.nombre}"`} />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div>
                                <img
                                    src={origami.imagen}
                                    alt=""
                                    className="object-cover w-full"
                                />
                            </div>
                            <div className="grid gap-1 mt-2">
                                <div>
                                    <div>
                                        <label className="text-lg font-bold">ID Origami</label>
                                        <p className="mt-1">{origami.id}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="text-lg font-bold">Nombre</label>
                                        <p className="mt-1">{origami.nombre}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="text-lg font-bold">Descripcion</label>
                                        <p className="mt-1">{origami.descripcion}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="text-lg font-bold">Dificultad</label>
                                        <p className="mt-1">{origami.nivel_de_dicultad}</p>
                                    </div>
                                    <div className="mt-4 text-right">
                                        <Link href={route('origami.edit', origami.id)} className="px-3 py-1 mr-4 text-white transition-all bg-orange-500 rounded shadow hover:bg-orange-600 text">
                                            Generar Imagen
                                        </Link>
                                        <Link href={route("origami.index")} className="px-3 py-1 text-white transition-all rounded shadow bg-emerald-500 hover:bg-emerald-600 text">
                                            Regresar
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}