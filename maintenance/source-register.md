# Registro editorial — no se publica en la wiki

Fuente: aeperez94/IronMeridian, main resuelto a `fdc84f3ddb94daf4a4411c1b031ca891cb4d784a`. Fecha de lectura: 2026-10-02 UTC. El repositorio Unity es privado y no se copia en esta entrega.

## Estrategia

Repositorio separado IronMeridian-Wiki. No hay motivo técnico para acoplar Node/Docusaurus al juego. Separar publicación pública, dependencias web y código privado; no exportar reportes internos.

## Evidencia por tema

| Contenido | Fuente revisada | Alcance |
| --- | --- | --- |
| Fichas y costes | Assets/Scripts/Core/Definitions.cs | 21 fichas; valores literales base, capacidades y capas de construcción |
| Producción/colas/rally | Definitions.cs, ProductionFlow.cs, QolEconomyStructures.cs | Productores, cola 5 y salidas físicas |
| Condición de derrota, torres/dropoff | QolEconomyStructures.cs | COMMAND completos, visión torre 8/34 y especializaciones |
| Recursos y Orbital Strike | Simulation.cs, PublicMapDefinition.cs | Extracción, carga, Gold, tamaño de mapa, coste/cooldown/retardo |
| Colocación y exploración | BuildPlacement.cs | Centro explorado, capa y orientación válida |
| Construcción en cola | UnitOrders.cs, Simulation.cs y BuildPlacement.cs | La cola de órdenes y reservas se describe con alcance confirmado |
| Aeronaves | AircraftWarfare.cs, Definitions.cs | Surface, pasadas, dos bombas, roles |
| Combots | CombotParts.cs, Research.cs, Definitions.cs | Tipos y estadísticas de piezas, investigación e inventario |
| EMP y cloaking | ElectronicWarfare.cs, Detection.cs | EMP; cloaking Scout como seam de revisión, no habilidad Combot confirmada |
| Recuperación | Salvage.cs, WreckSalvage.cs, WorkerCollect.cs | Recuperación de piezas y restos; no se importa rendimiento detallado |
| Capas | LayerAccess.cs, PublicMapDefinition.cs | Accesos propios, limitación de aeronaves, mapa |
| Controles | ControlSettings.cs y README.md | Binding actual manda sobre instrucciones antiguas; ReplicaPauseMenu.cs confirma menú MP local |
| AI vs AI | Presentation/LocalMatchMode.cs | Observador, dos IA, tecnología simétrica |
| LAN/WAN | Presentation/ProductMenuView.cs, Networking/MultiplayerProductFlow.cs | Botones LAN y variantes Steam; guía WAN queda pendiente |
| IA | EnemyIntelMemory.cs, CompositionPlan.cs, TacticalPlan.cs, RecoveryAI.cs, CombinedArmsAI.cs | Descripción conceptual; sin porcentajes ni implementación pública |
| Canon visual | Instrucción explícita del autor en esta solicitud | Denominaciones visuales, Orbital Platform provisional; no implica assets presentes |

## Conflictos resueltos

- README antiguo: Solar 5,5 Energy/s; Definitions actual: **8**. Se publica 8.
- Gold: código actual es variante de Ferrite, no una moneda independiente.
- Light Tank visual corresponde a un nombre distinto del catálogo: se presenta **KESTREL / Scout** explícitamente, sin renombrar juego ni crear estadísticas nuevas.
- Orbital Platform: coste/tiempo literal del catálogo describe un extremo vinculado. No se anuncia como edificio gratis construible: la ficha explica que depende del Orbital Uplink pagado.
- Cloaking encontrado para Scout es seam de revisión; no se publica como habilidad disponible de Combot.
- Reportes, protocolos, commits y clases no se importan a artículos públicos.

## Actualizar

Fijar una referencia nueva antes de leer fuentes. Comparar cada campo con las definiciones actuales y modificar JSON y texto relevante. El JSON es una instantánea editorial revisada, no una sincronización automática con Unity. No prometer sincronización automática. Registrar fecha, fuente y conflictos resueltos. No mezclar datos de distintas revisiones del juego.

- GATHER: el código de la referencia leída no filtra por memoria de depósitos para el jugador. La wiki describe búsqueda en la misma capa sin prometer restricción a depósitos conocidos. DiscoveredResources confirma la persistencia visual, que se documenta por separado.
