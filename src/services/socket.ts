import { io, Socket } from "socket.io-client";

let socket: Socket;

export const BIC_SERVICES = {
  consultas: "1️⃣ Consultas Rápidas (Saldo, Extratos, NIB, Contas)",
  operacoes: "2️⃣ Operações Financeiras (Transferências, Cartões, Crédito)",
  apoio: "3️⃣ Apoio Personalizado (Produtos, Reclamações, Sugestões)",
  seguranca: "4️⃣ Segurança e Proteção de Dados",
};

export const connectSocket = (
  token: string,
  service: keyof typeof BIC_SERVICES
) => {

  if (socket?.connected) return socket;

  socket = io(process.env.NEXT_PUBLIC_SOCKET_URL as string, {
    transports: ["websocket"],
    auth: {
      token,
      service,
      serviceName: BIC_SERVICES[service],
    },
    reconnection: true,
  });

  socket.on("connect", () => {
    console.log("✅ Conectado:", socket.id);
  });

  socket.on("disconnect", () => {
    console.log("❌ Desconectado");
  });

  return socket;
};

export const getSocket = () => socket;
