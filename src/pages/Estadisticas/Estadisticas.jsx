import "./Estadisticas.css"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

export const Estadisticas = () => {
    // Datos para el primer gráfico: Tiempo promedio por juego
    const tiempoPorJuego = [
        { name: "GTA V", value: 2, horas: "2 horas" },
        { name: "Valorant", value: 4, horas: "4 horas" },
        { name: "Dispatch", value: 1, horas: "1 hora" },
        { name: "Minecraft", value: 3, horas: "3 horas" },
        { name: "LOL", value: 6, horas: "6 horas" }
    ];

    // Datos para el segundo gráfico: Horas jugadas por mes
    const horasPorMes = [
        { name: "Enero", value: 45, horas: "45 horas" },
        { name: "Febrero", value: 52, horas: "52 horas" },
        { name: "Marzo", value: 38, horas: "38 horas" },
        { name: "Abril", value: 61, horas: "61 horas" },
        { name: "Mayo", value: 55, horas: "55 horas" }
    ];

    // Colores personalizados para los gráficos
    const coloresJuegos = ['#2c8c7c', '#1e40af', '#dc2626', '#16a34a', '#ca8a04'];
    const coloresMeses = ['#8b5cf6', '#ec4899', '#06b6d4', '#f59e0b', '#10b981'];

    // Formato personalizado para el tooltip
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p className="tooltip-label">{payload[0].name}</p>
                    <p className="tooltip-value">{payload[0].payload.horas || `${payload[0].value} horas`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <main className="Cont-Main">
            <h2 className="Titulo-Esta">Estadísticas</h2>
            
            <section className="Cont-Generos">
                <h3>Top 3 Géneros Favoritos</h3>
                <div className="Group-Generos">
                    <span className="categoria-imagen">Acción</span>
                    <span className="categoria-imagen">Aventura</span>
                    <span className="categoria-imagen">RPG</span> 
                </div>
            </section>

            <article className="Cont-Graficos">
                <section className="Cont-Grafico">
                    <header className="grafico-header">
                        <h3>Tiempo Promedio por Juego</h3>
                    </header>
                    <figure className="grafico-figure">
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Tooltip content={<CustomTooltip />} />
                                <Pie
                                    data={tiempoPorJuego}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {tiempoPorJuego.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={coloresJuegos[index % coloresJuegos.length]} />
                                    ))}
                                </Pie>
                                <Legend 
                                    verticalAlign="bottom" 
                                    height={36}
                                    iconType="circle"
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </figure>
                </section>

                <section className="Cont-Grafico">
                    <header className="grafico-header">
                        <h3>Horas Jugadas por Mes</h3>
                    </header>
                    <figure className="grafico-figure">
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Tooltip content={<CustomTooltip />} />
                                <Pie
                                    data={horasPorMes}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {horasPorMes.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={coloresMeses[index % coloresMeses.length]} />
                                    ))}
                                </Pie>
                                <Legend 
                                    verticalAlign="bottom" 
                                    height={36}
                                    iconType="circle"
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </figure>
                </section>
            </article>
        </main>
    )
}