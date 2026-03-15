"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  AlertCircle,
  ArrowDown,
  ArrowRight,
  ArrowUpDown,
  BarChart3,
  Box,
  Building2,
  Check,
  ChevronDown,
  ChevronRight,
  Circle,
  Cloud,
  Code2,
  Cog,
  Container,
  Database,
  FileCode2,
  Fingerprint,
  FolderTree,
  GitBranch,
  Globe,
  HardDrive,
  Layers,
  LayoutDashboard,
  Link,
  Lock,
  MapPin,
  Monitor,
  MousePointerClick,
  Network,
  Package,
  Palette,
  Router,
  Server,
  Settings,
  Shield,
  Smartphone,
  Timer,
  Truck,
  Users,
  Warehouse,
  Wifi,
  Zap,
  DollarSign,
  Calendar,
  Eye,
  Activity,
  Bell,
  FileText,
  Search,
  Radio,
  Cpu,
  MemoryStick,
  CircuitBoard,
  Blocks,
  Cable,
  ScanBarcode,
  ClipboardList,
  UserCog,
  Receipt,
  TrendingUp,
  AlertTriangle,
  RefreshCw,
  Download,
  Upload,
  Play,
  CheckCircle2,
  XCircle,
  Clock,
  Target,
  Layers3,
  Component,
  Workflow,
  Binary,
  Boxes,
  Route,
  Navigation,
  Fuel,
  Wrench,
  CalendarDays,
  BadgeCheck,
  ShieldCheck,
  KeyRound,
  ScanLine,
  Waves,
  Send,
  Mail,
  MessageSquare,
  BellRing,
  PieChart,
  LineChart,
  BarChart,
  Table2,
  FileSpreadsheet,
  Printer,
  Save,
  Bookmark,
  Star,
  Info,
  ExternalLink,
  Copy,
  Terminal,
  Hash,
  Braces,
  FolderOpen,
  File,
  GitCommit,
  Rocket,
  Flame,
  Sparkles,
  Crown,
  Gem,
  Heart,
  ThumbsUp,
} from "lucide-react";

// ============================================================
// TYPE DEFINITIONS
// ============================================================

interface ArchNode {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
  x: number;
  y: number;
  width: number;
  height: number;
  details?: string[];
  tech?: string[];
  category: string;
}

interface Connection {
  from: string;
  to: string;
  label?: string;
  color?: string;
  animated?: boolean;
  dashed?: boolean;
}

// ============================================================
// ANIMATED CONNECTION LINE COMPONENT
// ============================================================

const ConnectionLine: React.FC<{
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color?: string;
  animated?: boolean;
  dashed?: boolean;
  label?: string;
}> = ({
  x1,
  y1,
  x2,
  y2,
  color = "#6366f1",
  animated = false,
  dashed = false,
  label,
}) => {
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const curveOffset = Math.min(Math.abs(dx), Math.abs(dy)) * 0.3;

  const path =
    Math.abs(dy) > Math.abs(dx)
      ? `M ${x1} ${y1} C ${x1} ${y1 + curveOffset}, ${x2} ${y2 - curveOffset}, ${x2} ${y2}`
      : `M ${x1} ${y1} C ${x1 + curveOffset} ${y1}, ${x2 - curveOffset} ${y2}, ${x2} ${y2}`;

  return (
    <g>
      <defs>
        <marker
          id={`arrowhead-${x1}-${y1}`}
          markerWidth="10"
          markerHeight="7"
          refX="10"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill={color} opacity="0.7" />
        </marker>
        {animated && (
          <linearGradient
            id={`flow-${x1}-${y1}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor={color} stopOpacity="0">
              <animate
                attributeName="offset"
                values="-1;1"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor={color} stopOpacity="0.8">
              <animate
                attributeName="offset"
                values="-0.5;1.5"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor={color} stopOpacity="0">
              <animate
                attributeName="offset"
                values="0;2"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        )}
      </defs>
      <path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeDasharray={dashed ? "6,4" : "none"}
        opacity="0.4"
        markerEnd={`url(#arrowhead-${x1}-${y1})`}
      />
      {animated && (
        <path
          d={path}
          fill="none"
          stroke={`url(#flow-${x1}-${y1})`}
          strokeWidth="3"
        />
      )}
      {label && (
        <g>
          <rect
            x={midX - label.length * 3.5}
            y={midY - 8}
            width={label.length * 7}
            height={16}
            rx="4"
            fill="white"
            stroke={color}
            strokeWidth="1"
            opacity="0.9"
          />
          <text
            x={midX}
            y={midY + 4}
            textAnchor="middle"
            fontSize="9"
            fill={color}
            fontWeight="500"
          >
            {label}
          </text>
        </g>
      )}
    </g>
  );
};

// ============================================================
// ARCHITECTURE NODE COMPONENT
// ============================================================

const ArchitectureNode: React.FC<{
  node: ArchNode;
  onClick: (node: ArchNode) => void;
  isSelected: boolean;
  scale?: number;
}> = ({ node, onClick, isSelected, scale = 1 }) => {
  return (
    <g
      transform={`translate(${node.x}, ${node.y})`}
      onClick={() => onClick(node)}
      className="cursor-pointer"
      role="button"
      tabIndex={0}
    >
      {/* Glow effect when selected */}
      {isSelected && (
        <rect
          x={-4}
          y={-4}
          width={node.width + 8}
          height={node.height + 8}
          rx="14"
          fill="none"
          stroke={node.borderColor}
          strokeWidth="2"
          opacity="0.6"
        >
          <animate
            attributeName="opacity"
            values="0.3;0.8;0.3"
            dur="2s"
            repeatCount="indefinite"
          />
        </rect>
      )}

      {/* Main box */}
      <rect
        width={node.width}
        height={node.height}
        rx="10"
        fill={node.bgColor}
        stroke={node.borderColor}
        strokeWidth={isSelected ? "2.5" : "1.5"}
        className="transition-all duration-300"
        filter={isSelected ? "url(#shadow)" : "none"}
      />

      {/* Icon circle */}
      <circle
        cx={node.width / 2}
        cy={22}
        r="14"
        fill={node.color}
        opacity="0.15"
      />

      {/* Label */}
      <text
        x={node.width / 2}
        y={node.height / 2 + 12}
        textAnchor="middle"
        fontSize="10"
        fontWeight="600"
        fill={node.color}
      >
        {node.label.length > 14
          ? node.label.substring(0, 12) + ".."
          : node.label}
      </text>

      {/* Category badge */}
      <rect
        x={node.width / 2 - 25}
        y={node.height - 18}
        width="50"
        height="14"
        rx="7"
        fill={node.color}
        opacity="0.1"
      />
      <text
        x={node.width / 2}
        y={node.height - 8}
        textAnchor="middle"
        fontSize="7"
        fill={node.color}
        opacity="0.8"
      >
        {node.category}
      </text>
    </g>
  );
};

// ============================================================
// PULSE DOT COMPONENT
// ============================================================

const PulseDot: React.FC<{ x: number; y: number; color: string }> = ({
  x,
  y,
  color,
}) => (
  <g>
    <circle cx={x} cy={y} r="4" fill={color}>
      <animate
        attributeName="r"
        values="3;6;3"
        dur="2s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values="1;0.3;1"
        dur="2s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx={x} cy={y} r="2" fill={color} />
  </g>
);

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function WMSArchitectureDiagram() {
  const [selectedNode, setSelectedNode] = useState<ArchNode | null>(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [hoveredModule, setHoveredModule] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  // ============================================================
  // OVERVIEW NODES
  // ============================================================

  const overviewNodes: ArchNode[] = [
    // Client Layer
    {
      id: "web-app",
      label: "Web Application",
      description:
        "Next.js 14 dashboard for admins, managers, and supervisors",
      icon: <Monitor className="w-4 h-4" />,
      color: "#3b82f6",
      bgColor: "#eff6ff",
      borderColor: "#93c5fd",
      x: 80,
      y: 20,
      width: 120,
      height: 70,
      category: "Frontend",
      tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "ShadCN UI"],
      details: [
        "Server-Side Rendering (SSR)",
        "50+ pages/views",
        "Real-time WebSocket updates",
        "Responsive design",
        "Progressive Web App (PWA)",
        "Offline capability for critical features",
      ],
    },
    {
      id: "mobile-app",
      label: "Mobile App",
      description:
        "React Native app for warehouse workers and truck drivers",
      icon: <Smartphone className="w-4 h-4" />,
      color: "#8b5cf6",
      bgColor: "#f5f3ff",
      borderColor: "#c4b5fd",
      x: 250,
      y: 20,
      width: 120,
      height: 70,
      category: "Mobile",
      tech: ["React Native", "Expo", "TypeScript"],
      details: [
        "Barcode/QR scanning",
        "GPS tracking (drivers)",
        "Offline-first architecture",
        "Push notifications",
        "Camera for delivery proof",
        "Biometric login",
      ],
    },
    {
      id: "iot-devices",
      label: "IoT Devices",
      description: "Barcode scanners, RFID readers, temperature sensors",
      icon: <Radio className="w-4 h-4" />,
      color: "#f59e0b",
      bgColor: "#fffbeb",
      borderColor: "#fcd34d",
      x: 420,
      y: 20,
      width: 120,
      height: 70,
      category: "Hardware",
      tech: ["MQTT", "REST API", "WebSocket"],
      details: [
        "Barcode scanners (Zebra/Honeywell)",
        "RFID readers for bulk scanning",
        "Temperature sensors (cold storage)",
        "Weight scales integration",
        "GPS trackers (fleet)",
        "Dock door sensors",
      ],
    },
    {
      id: "third-party",
      label: "3rd Party Systems",
      description: "ERP, accounting, shipping carrier APIs",
      icon: <ExternalLink className="w-4 h-4" />,
      color: "#6b7280",
      bgColor: "#f9fafb",
      borderColor: "#d1d5db",
      x: 590,
      y: 20,
      width: 120,
      height: 70,
      category: "External",
      tech: ["REST", "SOAP", "EDI", "Webhooks"],
      details: [
        "SAP / Oracle ERP",
        "QuickBooks / Xero",
        "FedEx / UPS / DHL APIs",
        "Payment gateways",
        "Government compliance APIs",
        "Marketplace integrations",
      ],
    },

    // CDN & Security Layer
    {
      id: "cdn-waf",
      label: "CDN + WAF",
      description:
        "CloudFlare for content delivery, DDoS protection, SSL termination",
      icon: <Shield className="w-4 h-4" />,
      color: "#f97316",
      bgColor: "#fff7ed",
      borderColor: "#fdba74",
      x: 280,
      y: 130,
      width: 160,
      height: 55,
      category: "Security",
      tech: ["CloudFlare", "WAF Rules", "SSL/TLS 1.3"],
      details: [
        "DDoS mitigation (L3/L4/L7)",
        "Web Application Firewall",
        "SSL/TLS termination",
        "Global CDN (300+ PoPs)",
        "Bot protection",
        "Rate limiting",
      ],
    },

    // Load Balancer
    {
      id: "load-balancer",
      label: "Load Balancer",
      description:
        "AWS ALB distributing traffic across multiple service instances",
      icon: <Network className="w-4 h-4" />,
      color: "#06b6d4",
      bgColor: "#ecfeff",
      borderColor: "#67e8f9",
      x: 280,
      y: 220,
      width: 160,
      height: 55,
      category: "Networking",
      tech: ["AWS ALB", "Target Groups", "Health Checks"],
      details: [
        "Layer 7 load balancing",
        "Path-based routing",
        "Auto-scaling integration",
        "Health check monitoring",
        "Sticky sessions (if needed)",
        "Cross-zone load balancing",
      ],
    },

    // API Gateway
    {
      id: "api-gateway",
      label: "API Gateway",
      description:
        "Central entry point for all API requests with auth, rate limiting, routing",
      icon: <Router className="w-4 h-4" />,
      color: "#8b5cf6",
      bgColor: "#f5f3ff",
      borderColor: "#c4b5fd",
      x: 280,
      y: 310,
      width: 160,
      height: 55,
      category: "Gateway",
      tech: ["Kong / AWS API Gateway", "JWT Auth", "Rate Limiter"],
      details: [
        "JWT token validation",
        "Rate limiting (100 req/min per user)",
        "Request/Response transformation",
        "API versioning (v1, v2)",
        "Request logging",
        "CORS management",
        "API key management",
        "Throttling policies",
      ],
    },

    // Microservices
    {
      id: "auth-service",
      label: "Auth Service",
      description: "Authentication, authorization, RBAC, 2FA, session management",
      icon: <Lock className="w-4 h-4" />,
      color: "#ef4444",
      bgColor: "#fef2f2",
      borderColor: "#fca5a5",
      x: 20,
      y: 410,
      width: 110,
      height: 65,
      category: "Service",
      tech: ["NestJS", "JWT", "bcrypt", "TOTP"],
      details: [
        "JWT access + refresh tokens",
        "Role-based access (7 roles)",
        "Warehouse-level permissions",
        "Two-factor authentication",
        "Password policies",
        "Session management via Redis",
        "OAuth2 / SSO support",
        "Brute-force protection",
      ],
    },
    {
      id: "warehouse-service",
      label: "Warehouse Svc",
      description:
        "CRUD operations for 400 warehouses, zones, and storage locations",
      icon: <Warehouse className="w-4 h-4" />,
      color: "#3b82f6",
      bgColor: "#eff6ff",
      borderColor: "#93c5fd",
      x: 145,
      y: 410,
      width: 110,
      height: 65,
      category: "Service",
      tech: ["NestJS", "PostgreSQL", "Redis Cache"],
      details: [
        "400 warehouse management",
        "Zone configuration",
        "Aisle/Rack/Shelf/Bin mapping",
        "Capacity tracking",
        "Utilization dashboards",
        "Multi-warehouse transfers",
        "Warehouse layout editor",
      ],
    },
    {
      id: "inventory-service",
      label: "Inventory Svc",
      description:
        "Stock management, lot tracking, cycle counting, stock alerts",
      icon: <Package className="w-4 h-4" />,
      color: "#10b981",
      bgColor: "#ecfdf5",
      borderColor: "#6ee7b7",
      x: 270,
      y: 410,
      width: 110,
      height: 65,
      category: "Service",
      tech: ["NestJS", "PostgreSQL", "Redis", "Bull Queue"],
      details: [
        "Real-time stock levels",
        "Lot/Batch tracking",
        "Serial number tracking",
        "FIFO/LIFO/FEFO strategies",
        "Cycle counting",
        "Stock adjustments",
        "Reorder point alerts",
        "ABC analysis",
        "Expiry management",
      ],
    },
    {
      id: "order-service",
      label: "Order Service",
      description:
        "Complete order lifecycle from creation to delivery",
      icon: <ClipboardList className="w-4 h-4" />,
      color: "#f59e0b",
      bgColor: "#fffbeb",
      borderColor: "#fcd34d",
      x: 395,
      y: 410,
      width: 110,
      height: 65,
      category: "Service",
      tech: ["NestJS", "PostgreSQL", "State Machine"],
      details: [
        "Inbound/Outbound/Transfer orders",
        "Order state machine (10 states)",
        "Pick list generation",
        "Wave/Batch picking",
        "Pack station management",
        "Shipping label generation",
        "Backorder management",
        "Split shipments",
      ],
    },
    {
      id: "fleet-service",
      label: "Fleet Service",
      description:
        "Vehicle management, GPS tracking, route optimization, trip management",
      icon: <Truck className="w-4 h-4" />,
      color: "#8b5cf6",
      bgColor: "#f5f3ff",
      borderColor: "#c4b5fd",
      x: 520,
      y: 410,
      width: 110,
      height: 65,
      category: "Service",
      tech: ["NestJS", "Google Maps API", "WebSocket"],
      details: [
        "Vehicle registry & tracking",
        "Real-time GPS (10s intervals)",
        "Route optimization",
        "Trip management & scheduling",
        "Fuel tracking",
        "Maintenance scheduling",
        "Geofencing alerts",
        "Delivery proof (photo+signature)",
        "Driver performance scoring",
      ],
    },
    {
      id: "hr-service",
      label: "Employee Svc",
      description:
        "Employee management, attendance, shifts, tasks, performance",
      icon: <Users className="w-4 h-4" />,
      color: "#06b6d4",
      bgColor: "#ecfeff",
      borderColor: "#67e8f9",
      x: 645,
      y: 410,
      width: 110,
      height: 65,
      category: "Service",
      tech: ["NestJS", "PostgreSQL", "Bull Queue"],
      details: [
        "Employee directory (all 400 WH)",
        "Shift scheduling",
        "Clock in/out (attendance)",
        "Task assignment & tracking",
        "Performance metrics",
        "Leave management",
        "Training records",
        "Labor cost analysis",
      ],
    },
    {
      id: "report-service",
      label: "Report Service",
      description: "Dashboards, analytics, scheduled reports, export",
      icon: <BarChart3 className="w-4 h-4" />,
      color: "#ec4899",
      bgColor: "#fdf2f8",
      borderColor: "#f9a8d4",
      x: 80,
      y: 510,
      width: 110,
      height: 65,
      category: "Service",
      tech: ["NestJS", "PostgreSQL Read Replica", "PDFKit", "ExcelJS"],
      details: [
        "Executive dashboard (all 400 WH)",
        "Warehouse-level dashboards",
        "Inventory reports",
        "Order fulfillment reports",
        "Fleet performance reports",
        "Employee productivity",
        "Financial reports",
        "Custom report builder",
        "Scheduled email reports",
        "Export: PDF, Excel, CSV",
      ],
    },
    {
      id: "notification-service",
      label: "Notification Svc",
      description: "Multi-channel notifications: email, SMS, push, WebSocket",
      icon: <Bell className="w-4 h-4" />,
      color: "#f97316",
      bgColor: "#fff7ed",
      borderColor: "#fdba74",
      x: 225,
      y: 510,
      width: 110,
      height: 65,
      category: "Service",
      tech: ["NestJS", "Socket.io", "SendGrid", "Twilio", "FCM"],
      details: [
        "Email notifications (SendGrid)",
        "SMS alerts (Twilio)",
        "Push notifications (FCM)",
        "In-app notifications (WebSocket)",
        "Notification preferences",
        "Template management",
        "Delivery tracking",
        "Notification history",
      ],
    },
    {
      id: "billing-service",
      label: "Billing Service",
      description: "Invoicing, payments, financial ledger",
      icon: <Receipt className="w-4 h-4" />,
      color: "#14b8a6",
      bgColor: "#f0fdfa",
      borderColor: "#5eead4",
      x: 370,
      y: 510,
      width: 110,
      height: 65,
      category: "Service",
      tech: ["NestJS", "PostgreSQL", "Stripe"],
      details: [
        "Invoice generation",
        "Payment processing",
        "Financial ledger",
        "Tax calculations",
        "Credit management",
        "Payment reminders",
        "Revenue reports",
      ],
    },
    {
      id: "audit-service",
      label: "Audit Service",
      description:
        "Complete audit trail, compliance logging, activity tracking",
      icon: <FileText className="w-4 h-4" />,
      color: "#6b7280",
      bgColor: "#f9fafb",
      borderColor: "#d1d5db",
      x: 515,
      y: 510,
      width: 110,
      height: 65,
      category: "Service",
      tech: ["NestJS", "MongoDB", "Elasticsearch"],
      details: [
        "Every action logged",
        "User activity tracking",
        "IP address logging",
        "Data change history",
        "Compliance reports",
        "SOC2 / GDPR ready",
        "Retention policies",
        "Tamper-proof logs",
      ],
    },
    {
      id: "integration-service",
      label: "Integration Svc",
      description: "Connectors for ERP, shipping carriers, payment systems",
      icon: <Cable className="w-4 h-4" />,
      color: "#a855f7",
      bgColor: "#faf5ff",
      borderColor: "#d8b4fe",
      x: 660,
      y: 510,
      width: 110,
      height: 65,
      category: "Service",
      tech: ["NestJS", "Axios", "SOAP", "EDI"],
      details: [
        "SAP connector",
        "Oracle ERP connector",
        "QuickBooks sync",
        "FedEx/UPS/DHL APIs",
        "Payment gateway integration",
        "Webhook management",
        "Data transformation",
        "Error handling & retry",
      ],
    },

    // Message Queue
    {
      id: "message-queue",
      label: "Message Queue",
      description: "Async processing for orders, notifications, reports",
      icon: <Workflow className="w-4 h-4" />,
      color: "#f43f5e",
      bgColor: "#fff1f2",
      borderColor: "#fda4af",
      x: 80,
      y: 620,
      width: 140,
      height: 55,
      category: "Messaging",
      tech: ["RabbitMQ / Bull + Redis", "Dead Letter Queue"],
      details: [
        "Order processing queue",
        "Notification dispatch queue",
        "Report generation queue",
        "Inventory sync queue",
        "GPS data ingestion",
        "Dead letter queue (failed jobs)",
        "Priority queues",
        "Retry with exponential backoff",
      ],
    },

    // Cache
    {
      id: "redis-cache",
      label: "Redis Cache",
      description: "In-memory cache for sessions, hot data, rate limiting",
      icon: <Zap className="w-4 h-4" />,
      color: "#dc2626",
      bgColor: "#fef2f2",
      borderColor: "#fca5a5",
      x: 280,
      y: 620,
      width: 140,
      height: 55,
      category: "Cache",
      tech: ["Redis 7 Cluster", "ElastiCache"],
      details: [
        "Session storage (JWT blacklist)",
        "API response cache",
        "Rate limiter counters",
        "Real-time pub/sub",
        "Warehouse config cache",
        "Product catalog cache",
        "Dashboard metrics cache",
        "TTL-based expiry",
      ],
    },

    // File Storage
    {
      id: "file-storage",
      label: "File Storage",
      description: "Documents, images, reports, delivery proofs",
      icon: <HardDrive className="w-4 h-4" />,
      color: "#0ea5e9",
      bgColor: "#f0f9ff",
      borderColor: "#7dd3fc",
      x: 480,
      y: 620,
      width: 140,
      height: 55,
      category: "Storage",
      tech: ["AWS S3", "CloudFront CDN"],
      details: [
        "Product images",
        "Delivery proof photos",
        "Signature captures",
        "Generated reports (PDF/Excel)",
        "Import/Export files",
        "Employee documents",
        "Versioned storage",
        "Lifecycle policies (archival)",
      ],
    },

    // Search Engine
    {
      id: "search-engine",
      label: "Search Engine",
      description: "Full-text search across products, orders, locations",
      icon: <Search className="w-4 h-4" />,
      color: "#84cc16",
      bgColor: "#f7fee7",
      borderColor: "#bef264",
      x: 680,
      y: 620,
      width: 120,
      height: 55,
      category: "Search",
      tech: ["Elasticsearch / OpenSearch"],
      details: [
        "Product search (fuzzy matching)",
        "Order search (by any field)",
        "Location search",
        "Employee search",
        "Auto-complete suggestions",
        "Faceted search (filters)",
        "Log analytics",
        "Full-text indexing",
      ],
    },

    // Databases
    {
      id: "postgres-primary",
      label: "PostgreSQL Primary",
      description:
        "Main transactional database for all business data (ACID compliant)",
      icon: <Database className="w-4 h-4" />,
      color: "#3b82f6",
      bgColor: "#eff6ff",
      borderColor: "#93c5fd",
      x: 120,
      y: 720,
      width: 150,
      height: 60,
      category: "Database",
      tech: ["PostgreSQL 16", "AWS RDS Multi-AZ", "PgBouncer"],
      details: [
        "100+ tables",
        "ACID transactions",
        "Multi-AZ (high availability)",
        "Automated backups (daily)",
        "Point-in-time recovery",
        "Connection pooling (PgBouncer)",
        "Table partitioning by warehouse",
        "Encrypted at rest (AES-256)",
        "Estimated: 500GB-2TB data",
      ],
    },
    {
      id: "postgres-replica",
      label: "PostgreSQL Replica",
      description: "Read replicas for reporting and analytics queries",
      icon: <Database className="w-4 h-4" />,
      color: "#6366f1",
      bgColor: "#eef2ff",
      borderColor: "#a5b4fc",
      x: 340,
      y: 720,
      width: 150,
      height: 60,
      category: "Database",
      tech: ["PostgreSQL 16", "Read Replica", "3 instances"],
      details: [
        "3 read replicas",
        "Dashboard queries",
        "Report generation",
        "Analytics workloads",
        "Search queries",
        "Replication lag < 1 second",
        "Auto-scaling read capacity",
      ],
    },
    {
      id: "mongodb",
      label: "MongoDB",
      description: "Document store for IoT data, GPS logs, audit trails",
      icon: <Database className="w-4 h-4" />,
      color: "#22c55e",
      bgColor: "#f0fdf4",
      borderColor: "#86efac",
      x: 560,
      y: 720,
      width: 140,
      height: 60,
      category: "Database",
      tech: ["MongoDB 7", "DocumentDB", "Time Series"],
      details: [
        "GPS tracking data (millions/day)",
        "IoT sensor readings",
        "Audit log storage",
        "Flexible schema for metadata",
        "Time-series data support",
        "Auto-archival policies",
        "Sharded for high throughput",
      ],
    },
  ];

  // ============================================================
  // OVERVIEW CONNECTIONS
  // ============================================================

  const overviewConnections: Connection[] = [
    // Client to CDN
    {
      from: "web-app",
      to: "cdn-waf",
      label: "HTTPS",
      color: "#3b82f6",
      animated: true,
    },
    {
      from: "mobile-app",
      to: "cdn-waf",
      label: "HTTPS",
      color: "#8b5cf6",
      animated: true,
    },
    {
      from: "iot-devices",
      to: "cdn-waf",
      label: "MQTT/HTTP",
      color: "#f59e0b",
    },
    {
      from: "third-party",
      to: "cdn-waf",
      label: "Webhooks",
      color: "#6b7280",
      dashed: true,
    },

    // CDN to LB
    {
      from: "cdn-waf",
      to: "load-balancer",
      label: "Filtered",
      color: "#f97316",
      animated: true,
    },

    // LB to API Gateway
    {
      from: "load-balancer",
      to: "api-gateway",
      label: "Route",
      color: "#06b6d4",
      animated: true,
    },

    // API Gateway to Services
    { from: "api-gateway", to: "auth-service", color: "#ef4444" },
    { from: "api-gateway", to: "warehouse-service", color: "#3b82f6" },
    { from: "api-gateway", to: "inventory-service", color: "#10b981", animated: true },
    { from: "api-gateway", to: "order-service", color: "#f59e0b", animated: true },
    { from: "api-gateway", to: "fleet-service", color: "#8b5cf6" },
    { from: "api-gateway", to: "hr-service", color: "#06b6d4" },

    // Services to second row services
    { from: "inventory-service", to: "report-service", color: "#ec4899", dashed: true },
    { from: "order-service", to: "notification-service", color: "#f97316", dashed: true },
    { from: "order-service", to: "billing-service", color: "#14b8a6", dashed: true },
    { from: "auth-service", to: "audit-service", color: "#6b7280", dashed: true },
    { from: "fleet-service", to: "integration-service", color: "#a855f7", dashed: true },

    // Services to infrastructure
    { from: "order-service", to: "message-queue", color: "#f43f5e", animated: true },
    { from: "notification-service", to: "message-queue", color: "#f43f5e" },
    { from: "inventory-service", to: "redis-cache", color: "#dc2626", animated: true },
    { from: "auth-service", to: "redis-cache", color: "#dc2626" },
    { from: "report-service", to: "file-storage", color: "#0ea5e9" },
    { from: "fleet-service", to: "file-storage", color: "#0ea5e9" },
    { from: "inventory-service", to: "search-engine", color: "#84cc16" },
    { from: "order-service", to: "search-engine", color: "#84cc16" },

    // Infrastructure to Databases
    { from: "message-queue", to: "postgres-primary", color: "#3b82f6", animated: true },
    { from: "redis-cache", to: "postgres-primary", color: "#3b82f6", dashed: true },
    { from: "report-service", to: "postgres-replica", color: "#6366f1", animated: true },
    { from: "audit-service", to: "mongodb", color: "#22c55e" },
    { from: "fleet-service", to: "mongodb", color: "#22c55e", label: "GPS" },

    // DB replication
    {
      from: "postgres-primary",
      to: "postgres-replica",
      label: "Replication",
      color: "#6366f1",
      animated: true,
      dashed: true,
    },
  ];

  // ============================================================
  // GET NODE POSITION FOR CONNECTIONS
  // ============================================================

  const getNodeCenter = useCallback(
    (nodeId: string, nodes: ArchNode[]) => {
      const node = nodes.find((n) => n.id === nodeId);
      if (!node) return { x: 0, y: 0 };
      return {
        x: node.x + node.width / 2,
        y: node.y + node.height / 2,
      };
    },
    []
  );

  const getConnectionPoints = useCallback(
    (fromId: string, toId: string, nodes: ArchNode[]) => {
      const from = nodes.find((n) => n.id === fromId);
      const to = nodes.find((n) => n.id === toId);
      if (!from || !to) return { x1: 0, y1: 0, x2: 0, y2: 0 };

      const fromCenter = {
        x: from.x + from.width / 2,
        y: from.y + from.height / 2,
      };
      const toCenter = {
        x: to.x + to.width / 2,
        y: to.y + to.height / 2,
      };

      let x1 = fromCenter.x,
        y1 = fromCenter.y,
        x2 = toCenter.x,
        y2 = toCenter.y;

      // Determine best connection points (top/bottom/left/right)
      if (Math.abs(toCenter.y - fromCenter.y) > Math.abs(toCenter.x - fromCenter.x)) {
        // Vertical connection
        if (toCenter.y > fromCenter.y) {
          y1 = from.y + from.height;
          y2 = to.y;
        } else {
          y1 = from.y;
          y2 = to.y + to.height;
        }
      } else {
        // Horizontal connection
        if (toCenter.x > fromCenter.x) {
          x1 = from.x + from.width;
          x2 = to.x;
        } else {
          x1 = from.x;
          x2 = to.x + to.width;
        }
      }

      return { x1, y1, x2, y2 };
    },
    []
  );

  // ============================================================
  // MODULE DATA
  // ============================================================

  const modules = [
    {
      id: "warehouse",
      name: "Warehouse Management",
      icon: <Warehouse className="w-5 h-5" />,
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
      textColor: "text-blue-700",
      borderColor: "border-blue-200",
      features: [
        "CRUD for 400 warehouses",
        "Zone Management (Receiving, Storage, Shipping, Returns)",
        "Location Management (Aisle → Rack → Shelf → Bin)",
        "Capacity tracking & utilization %",
        "Warehouse layout/map viewer",
        "Temperature monitoring (cold storage)",
        "Dock door management",
        "Multi-warehouse transfers",
        "Warehouse-level permissions",
      ],
      tables: [
        "warehouses",
        "warehouse_zones",
        "storage_locations",
        "dock_doors",
        "warehouse_settings",
      ],
      endpoints: 12,
      complexity: "Medium",
    },
    {
      id: "inventory",
      name: "Inventory Management",
      icon: <Package className="w-5 h-5" />,
      color: "bg-emerald-500",
      lightColor: "bg-emerald-50",
      textColor: "text-emerald-700",
      borderColor: "border-emerald-200",
      features: [
        "Real-time stock levels (per warehouse)",
        "Product catalog with SKU management",
        "Lot/Batch tracking",
        "Serial number tracking",
        "FIFO/LIFO/FEFO picking strategies",
        "Cycle counting & physical inventory",
        "Stock adjustments with reason codes",
        "Reorder point alerts",
        "ABC analysis & dead stock detection",
        "Barcode/QR code generation & scanning",
        "Expiry date management",
        "Inventory valuation reports",
        "Stock movement history",
      ],
      tables: [
        "products",
        "categories",
        "inventory",
        "inventory_transactions",
        "lot_tracking",
        "serial_numbers",
        "stock_alerts",
        "count_sessions",
      ],
      endpoints: 25,
      complexity: "High",
    },
    {
      id: "orders",
      name: "Order Management",
      icon: <ClipboardList className="w-5 h-5" />,
      color: "bg-amber-500",
      lightColor: "bg-amber-50",
      textColor: "text-amber-700",
      borderColor: "border-amber-200",
      features: [
        "Inbound orders (Purchase Orders)",
        "Outbound orders (Sales/Shipments)",
        "Transfer orders (between warehouses)",
        "Order lifecycle state machine",
        "Pick list generation",
        "Wave picking / batch picking",
        "Pack station management",
        "Shipping label generation",
        "Priority management (URGENT → LOW)",
        "Backorder management",
        "Split shipments",
        "Returns processing (RMA)",
        "Customer portal (order tracking)",
      ],
      tables: [
        "orders",
        "order_items",
        "pick_lists",
        "pick_list_items",
        "pack_sessions",
        "shipments",
        "returns",
        "return_items",
      ],
      endpoints: 30,
      complexity: "Very High",
    },
    {
      id: "fleet",
      name: "Fleet / Truck Management",
      icon: <Truck className="w-5 h-5" />,
      color: "bg-violet-500",
      lightColor: "bg-violet-50",
      textColor: "text-violet-700",
      borderColor: "border-violet-200",
      features: [
        "Vehicle registry & management",
        "Real-time GPS tracking (map view)",
        "Route planning & optimization",
        "Trip management & scheduling",
        "Driver assignment",
        "Fuel tracking & cost analysis",
        "Maintenance scheduling",
        "Vehicle inspection checklists",
        "Delivery proof (photo + signature)",
        "ETA calculations",
        "Geofencing alerts",
        "Speed monitoring & alerts",
        "Vehicle utilization reports",
        "Insurance & registration tracking",
        "Load optimization",
      ],
      tables: [
        "vehicles",
        "trips",
        "trip_orders",
        "trip_waypoints",
        "gps_tracking",
        "fuel_logs",
        "maintenance_records",
        "inspections",
        "delivery_proofs",
      ],
      endpoints: 22,
      complexity: "High",
    },
    {
      id: "employees",
      name: "Employee / HR Management",
      icon: <Users className="w-5 h-5" />,
      color: "bg-cyan-500",
      lightColor: "bg-cyan-50",
      textColor: "text-cyan-700",
      borderColor: "border-cyan-200",
      features: [
        "Employee directory (all warehouses)",
        "Role-based access control (RBAC)",
        "Shift scheduling & management",
        "Attendance tracking (clock in/out)",
        "Task assignment & tracking",
        "Performance metrics (picks/hour, etc.)",
        "Leave management",
        "Training & certification tracking",
        "Labor cost analysis",
        "Overtime management",
        "Employee self-service portal",
      ],
      tables: [
        "employees",
        "attendance",
        "shifts",
        "employee_tasks",
        "leaves",
        "certifications",
        "performance_reviews",
      ],
      endpoints: 18,
      complexity: "Medium",
    },
    {
      id: "reports",
      name: "Reporting & Analytics",
      icon: <BarChart3 className="w-5 h-5" />,
      color: "bg-pink-500",
      lightColor: "bg-pink-50",
      textColor: "text-pink-700",
      borderColor: "border-pink-200",
      features: [
        "Executive dashboard (all 400 WH)",
        "Warehouse-level dashboard",
        "Inventory reports (stock levels, valuation)",
        "Order fulfillment reports",
        "Fleet performance reports",
        "Employee productivity reports",
        "Financial reports (revenue, costs)",
        "Custom report builder",
        "Scheduled report emails",
        "Export: PDF, Excel, CSV",
        "KPI widgets",
        "Trend analysis",
        "Heatmaps (warehouse utilization)",
      ],
      tables: [
        "report_templates",
        "scheduled_reports",
        "report_exports",
        "dashboard_widgets",
      ],
      endpoints: 15,
      complexity: "High",
    },
  ];

  // ============================================================
  // BUDGET DATA
  // ============================================================

  const budgetData = [
    {
      category: "Development Team",
      amount: 120000,
      percentage: 60,
      color: "bg-blue-500",
      items: [
        { role: "Tech Lead / Architect", cost: 25000, count: 1 },
        { role: "Senior Backend Developer", cost: 15000, count: 2 },
        { role: "Senior Frontend Developer", cost: 12500, count: 2 },
        { role: "Mobile Developer", cost: 12000, count: 1 },
        { role: "DevOps Engineer (Part-time)", cost: 8000, count: 1 },
        { role: "QA Engineer", cost: 10000, count: 1 },
        { role: "UI/UX Designer (Part-time)", cost: 6000, count: 1 },
        { role: "Project Manager (Part-time)", cost: 4000, count: 1 },
      ],
    },
    {
      category: "Cloud Infrastructure (Year 1)",
      amount: 40000,
      percentage: 20,
      color: "bg-emerald-500",
      items: [
        { role: "AWS EKS Cluster", cost: 9600, count: 1 },
        { role: "EC2 Instances (6x t3.large)", cost: 7200, count: 6 },
        { role: "RDS PostgreSQL (Multi-AZ)", cost: 6000, count: 1 },
        { role: "ElastiCache Redis", cost: 2400, count: 1 },
        { role: "S3 + CloudFront", cost: 1200, count: 1 },
        { role: "OpenSearch (Elasticsearch)", cost: 3600, count: 1 },
        { role: "ALB + Data Transfer", cost: 1800, count: 1 },
        { role: "Monitoring + Misc", cost: 8200, count: 1 },
      ],
    },
    {
      category: "Third-Party Services",
      amount: 20000,
      percentage: 10,
      color: "bg-amber-500",
      items: [
        { role: "Google Maps API", cost: 5000, count: 1 },
        { role: "Twilio (SMS)", cost: 3000, count: 1 },
        { role: "SendGrid (Email)", cost: 1000, count: 1 },
        { role: "Sentry (Error Tracking)", cost: 500, count: 1 },
        { role: "GitHub Team", cost: 500, count: 1 },
        { role: "Design & PM Tools", cost: 1000, count: 1 },
        { role: "Buffer & Misc", cost: 9000, count: 1 },
      ],
    },
    {
      category: "Contingency",
      amount: 20000,
      percentage: 10,
      color: "bg-red-500",
      items: [
        { role: "Bug fixes & scope changes", cost: 10000, count: 1 },
        { role: "Security audit", cost: 5000, count: 1 },
        { role: "Performance optimization", cost: 3000, count: 1 },
        { role: "Emergency fund", cost: 2000, count: 1 },
      ],
    },
  ];

  // ============================================================
  // TIMELINE DATA
  // ============================================================

  const timeline = [
    {
      month: "Month 1",
      title: "Foundation & Setup",
      phase: "Phase 1",
      color: "bg-blue-500",
      tasks: [
        "Architecture setup & DB design",
        "CI/CD pipeline (GitHub Actions)",
        "Auth module (JWT + RBAC)",
        "User & Role management",
        "Base UI layout (Sidebar, Header)",
        "Dashboard skeleton",
      ],
      deliverable: "Login system, RBAC, Dashboard shell",
      progress: 100,
    },
    {
      month: "Month 2",
      title: "Warehouse & Inventory",
      phase: "Phase 1",
      color: "bg-emerald-500",
      tasks: [
        "Warehouse CRUD (all 400)",
        "Zone & Location management",
        "Product catalog",
        "Inventory management (core)",
        "Stock receiving & putaway",
        "Barcode generation",
      ],
      deliverable: "Manage warehouses & inventory",
      progress: 100,
    },
    {
      month: "Month 3",
      title: "Orders & Fulfillment",
      phase: "Phase 1",
      color: "bg-amber-500",
      tasks: [
        "Order management (CRUD)",
        "Order lifecycle state machine",
        "Pick list generation",
        "Pack & Ship workflow",
        "Inbound/Outbound/Transfer orders",
        "Basic notifications",
      ],
      deliverable: "Complete order flow",
      progress: 85,
    },
    {
      month: "Month 4",
      title: "Fleet & Employees",
      phase: "Phase 2",
      color: "bg-violet-500",
      tasks: [
        "Vehicle management",
        "GPS tracking integration",
        "Trip management",
        "Employee module",
        "Attendance (clock in/out)",
        "Task assignment",
      ],
      deliverable: "Fleet tracking & HR features",
      progress: 70,
    },
    {
      month: "Month 5",
      title: "Reports & Billing",
      phase: "Phase 2",
      color: "bg-pink-500",
      tasks: [
        "Executive dashboard",
        "Reports (Inventory, Orders, Fleet)",
        "Export (PDF, Excel)",
        "Billing & invoicing",
        "Advanced notifications",
        "Mobile app start",
      ],
      deliverable: "Full reporting suite",
      progress: 50,
    },
    {
      month: "Month 6",
      title: "Mobile & Real-time",
      phase: "Phase 3",
      color: "bg-cyan-500",
      tasks: [
        "Mobile app (Driver + Worker)",
        "Barcode scanning (mobile)",
        "WebSocket real-time updates",
        "Live GPS tracking on map",
        "Push notifications",
        "Delivery proof capture",
      ],
      deliverable: "Mobile apps + real-time features",
      progress: 30,
    },
    {
      month: "Month 7",
      title: "Testing & Optimization",
      phase: "Phase 3",
      color: "bg-orange-500",
      tasks: [
        "Load testing (k6 / Artillery)",
        "Security audit & penetration testing",
        "Performance optimization",
        "UAT with pilot warehouses",
        "Bug fixes & refinements",
        "Documentation",
      ],
      deliverable: "Production-ready system",
      progress: 15,
    },
    {
      month: "Month 8",
      title: "Deployment & Launch",
      phase: "Launch",
      color: "bg-red-500",
      tasks: [
        "Staging deployment",
        "Data migration scripts",
        "Production deployment (pilot 10 WH)",
        "Monitor & fix issues",
        "Team training",
        "Gradual rollout → all 400 warehouses",
      ],
      deliverable: "🚀 LIVE SYSTEM",
      progress: 5,
    },
  ];

  // ============================================================
  // TECH STACK DATA
  // ============================================================

  const techStack = [
    {
      layer: "Frontend",
      icon: <Monitor className="w-5 h-5" />,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      technologies: [
        { name: "Next.js 14", purpose: "React framework (SSR/SSG)", icon: "⚡" },
        { name: "TypeScript", purpose: "Type safety", icon: "🔷" },
        { name: "Tailwind CSS", purpose: "Utility-first CSS", icon: "🎨" },
        { name: "ShadCN UI", purpose: "Component library", icon: "🧩" },
        { name: "Zustand", purpose: "State management", icon: "🐻" },
        { name: "React Query", purpose: "Server state & caching", icon: "🔄" },
        { name: "Recharts", purpose: "Charts & visualizations", icon: "📊" },
        { name: "Socket.io Client", purpose: "Real-time updates", icon: "🔌" },
      ],
    },
    {
      layer: "Mobile",
      icon: <Smartphone className="w-5 h-5" />,
      color: "text-violet-600",
      bgColor: "bg-violet-50",
      technologies: [
        { name: "React Native", purpose: "Cross-platform mobile", icon: "📱" },
        { name: "Expo", purpose: "Build & deploy tooling", icon: "🚀" },
        { name: "React Navigation", purpose: "Screen navigation", icon: "🧭" },
        { name: "Camera + Barcode", purpose: "Scanning & photos", icon: "📷" },
        { name: "Maps SDK", purpose: "GPS & route display", icon: "🗺️" },
      ],
    },
    {
      layer: "Backend",
      icon: <Server className="w-5 h-5" />,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      technologies: [
        { name: "NestJS", purpose: "Enterprise Node.js framework", icon: "🏗️" },
        { name: "TypeScript", purpose: "Type safety", icon: "🔷" },
        { name: "TypeORM / Prisma", purpose: "Database ORM", icon: "🔗" },
        { name: "Bull Queue", purpose: "Job processing", icon: "🐂" },
        { name: "Socket.io", purpose: "WebSocket server", icon: "🔌" },
        { name: "Passport.js", purpose: "Authentication strategies", icon: "🔐" },
        { name: "class-validator", purpose: "Input validation", icon: "✅" },
        { name: "Swagger", purpose: "API documentation", icon: "📄" },
      ],
    },
    {
      layer: "Database",
      icon: <Database className="w-5 h-5" />,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      technologies: [
        { name: "PostgreSQL 16", purpose: "Primary RDBMS (ACID)", icon: "🐘" },
        { name: "Redis 7", purpose: "Cache, sessions, pub/sub", icon: "⚡" },
        { name: "MongoDB", purpose: "IoT data, audit logs", icon: "🍃" },
        { name: "Elasticsearch", purpose: "Full-text search", icon: "🔍" },
      ],
    },
    {
      layer: "DevOps & Cloud",
      icon: <Cloud className="w-5 h-5" />,
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
      technologies: [
        { name: "AWS", purpose: "Cloud provider", icon: "☁️" },
        { name: "Docker", purpose: "Containerization", icon: "🐳" },
        { name: "Kubernetes (EKS)", purpose: "Container orchestration", icon: "⚙️" },
        { name: "GitHub Actions", purpose: "CI/CD pipeline", icon: "🔄" },
        { name: "Terraform", purpose: "Infrastructure as Code", icon: "🏗️" },
        { name: "Grafana + Prometheus", purpose: "Monitoring & metrics", icon: "📈" },
        { name: "ELK Stack", purpose: "Centralized logging", icon: "📋" },
        { name: "Sentry", purpose: "Error tracking", icon: "🐛" },
      ],
    },
    {
      layer: "Third-Party APIs",
      icon: <Globe className="w-5 h-5" />,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      technologies: [
        { name: "Google Maps API", purpose: "GPS, routing, geocoding", icon: "🗺️" },
        { name: "Twilio", purpose: "SMS notifications", icon: "💬" },
        { name: "SendGrid", purpose: "Email delivery", icon: "📧" },
        { name: "Firebase (FCM)", purpose: "Push notifications", icon: "🔔" },
        { name: "Stripe", purpose: "Payment processing", icon: "💳" },
      ],
    },
  ];

  // ============================================================
  // SECURITY DATA
  // ============================================================

  const securityLayers = [
    {
      layer: "Network Security",
      icon: <Shield className="w-5 h-5" />,
      color: "text-red-600",
      items: [
        "CloudFlare WAF (Web Application Firewall)",
        "DDoS Protection (L3/L4/L7)",
        "VPC with Private Subnets",
        "Security Groups (port-level)",
        "NACLs (Network Access Control Lists)",
        "VPN for admin access",
        "SSL/TLS 1.3 everywhere",
      ],
    },
    {
      layer: "Application Security",
      icon: <Lock className="w-5 h-5" />,
      color: "text-orange-600",
      items: [
        "JWT + Refresh Tokens (15min expiry)",
        "Role-Based Access Control (7 roles)",
        "Warehouse-level data isolation",
        "Two-Factor Authentication (2FA/TOTP)",
        "API Rate Limiting (100 req/min)",
        "Input Validation (Zod schemas)",
        "SQL Injection Prevention (parameterized)",
        "XSS Prevention (Helmet.js + CSP)",
        "CORS strict configuration",
        "CSRF Protection",
      ],
    },
    {
      layer: "Data Security",
      icon: <KeyRound className="w-5 h-5" />,
      color: "text-blue-600",
      items: [
        "Encryption at Rest (AES-256)",
        "Encryption in Transit (TLS 1.3)",
        "Database-level encryption (RDS)",
        "PII Data Masking in logs",
        "AWS Secrets Manager (credentials)",
        "Automated daily backups",
        "Point-in-time recovery (5min granularity)",
        "Cross-region backup replication",
      ],
    },
    {
      layer: "Audit & Compliance",
      icon: <FileText className="w-5 h-5" />,
      color: "text-green-600",
      items: [
        "Complete audit trail (every action)",
        "IP Address & device logging",
        "Session management & tracking",
        "Data retention policies",
        "GDPR compliance ready",
        "SOC2 compliance ready",
        "Regular security audits",
        "Penetration testing (quarterly)",
      ],
    },
  ];

  // ============================================================
  // RBAC DATA
  // ============================================================

  const roles = [
    {
      role: "Super Admin",
      icon: <Crown className="w-4 h-4" />,
      color: "text-red-600",
      access: "System-wide access to everything",
      permissions: [
        "All warehouses",
        "All data",
        "User management",
        "System config",
        "Billing",
      ],
    },
    {
      role: "Admin",
      icon: <ShieldCheck className="w-4 h-4" />,
      color: "text-orange-600",
      access: "Regional access (group of warehouses)",
      permissions: [
        "Assigned warehouses",
        "All modules",
        "Employee management",
        "Reports",
      ],
    },
    {
      role: "Warehouse Manager",
      icon: <Building2 className="w-4 h-4" />,
      color: "text-blue-600",
      access: "Single warehouse full access",
      permissions: [
        "Own warehouse",
        "Inventory",
        "Orders",
        "Employees",
        "Reports",
      ],
    },
    {
      role: "Supervisor",
      icon: <UserCog className="w-4 h-4" />,
      color: "text-violet-600",
      access: "Zone-level access within warehouse",
      permissions: [
        "Assigned zones",
        "Task management",
        "Inventory ops",
        "View reports",
      ],
    },
    {
      role: "Operator",
      icon: <Cog className="w-4 h-4" />,
      color: "text-emerald-600",
      access: "Task-level access only",
      permissions: ["Pick/Pack/Ship", "Receive goods", "Cycle count", "Own tasks"],
    },
    {
      role: "Driver",
      icon: <Truck className="w-4 h-4" />,
      color: "text-cyan-600",
      access: "Fleet mobile app only",
      permissions: [
        "Own trips",
        "GPS tracking",
        "Delivery proof",
        "Vehicle inspection",
      ],
    },
    {
      role: "Viewer",
      icon: <Eye className="w-4 h-4" />,
      color: "text-gray-600",
      access: "Read-only access",
      permissions: [
        "View dashboards",
        "View reports",
        "No data modification",
      ],
    },
  ];

  // ============================================================
  // RENDER
  // ============================================================

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
        {/* ============ HEADER ============ */}
        <div className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-[1400px] mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <Warehouse className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-slate-900">
                    WMS Architecture Blueprint
                  </h1>
                  <p className="text-sm text-slate-500">
                    400 Warehouses • $200K Budget • Enterprise Grade
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                  <Circle className="w-2 h-2 mr-1 fill-emerald-500" />
                  Production Ready
                </Badge>
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  14 Microservices
                </Badge>
                <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                  100+ DB Tables
                </Badge>
                <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                  200+ API Endpoints
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* ============ MAIN CONTENT ============ */}
        <div className="max-w-[1400px] mx-auto px-4 py-6">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-6"
          >
            <TabsList className="grid grid-cols-8 w-full h-auto p-1 bg-slate-100 rounded-xl">
              {[
                { value: "overview", icon: <LayoutDashboard className="w-4 h-4" />, label: "System Overview" },
                { value: "modules", icon: <Blocks className="w-4 h-4" />, label: "Modules" },
                { value: "tech", icon: <Code2 className="w-4 h-4" />, label: "Tech Stack" },
                { value: "database", icon: <Database className="w-4 h-4" />, label: "Database" },
                { value: "security", icon: <Shield className="w-4 h-4" />, label: "Security" },
                { value: "infra", icon: <Cloud className="w-4 h-4" />, label: "Infrastructure" },
                { value: "budget", icon: <DollarSign className="w-4 h-4" />, label: "Budget" },
                { value: "timeline", icon: <Calendar className="w-4 h-4" />, label: "Timeline" },
              ].map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex items-center gap-1.5 py-2.5 text-xs font-medium rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm"
                >
                  {tab.icon}
                  <span className="hidden lg:inline">{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* ============================================================ */}
            {/* TAB 1: SYSTEM OVERVIEW - INTERACTIVE ARCHITECTURE DIAGRAM    */}
            {/* ============================================================ */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Main Diagram */}
                <div className="lg:col-span-3">
                  <Card className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Network className="w-5 h-5 text-indigo-500" />
                            Production Architecture Diagram
                          </CardTitle>
                          <CardDescription>
                            Click on any node to see detailed information
                          </CardDescription>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="secondary" className="text-xs">
                            <Circle className="w-2 h-2 mr-1 fill-green-500 text-green-500" />
                            Live connections animated
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-2">
                      <div className="bg-slate-50/50 rounded-lg border overflow-auto">
                        <svg
                          ref={svgRef}
                          viewBox="0 0 820 810"
                          className="w-full h-auto min-h-[600px]"
                          style={{ minWidth: "800px" }}
                        >
                          <defs>
                            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                              <feDropShadow
                                dx="0"
                                dy="2"
                                stdDeviation="4"
                                floodOpacity="0.15"
                              />
                            </filter>
                            <pattern
                              id="grid"
                              width="20"
                              height="20"
                              patternUnits="userSpaceOnUse"
                            >
                              <path
                                d="M 20 0 L 0 0 0 20"
                                fill="none"
                                stroke="#e2e8f0"
                                strokeWidth="0.5"
                              />
                            </pattern>
                          </defs>

                          {/* Background Grid */}
                          <rect width="820" height="810" fill="url(#grid)" opacity="0.5" />

                          {/* Layer Labels */}
                          {[
                            { y: 8, label: "CLIENT LAYER", color: "#6366f1" },
                            { y: 120, label: "SECURITY LAYER", color: "#f97316" },
                            { y: 210, label: "LOAD BALANCING", color: "#06b6d4" },
                            { y: 300, label: "API GATEWAY", color: "#8b5cf6" },
                            { y: 395, label: "MICROSERVICES (Kubernetes)", color: "#10b981" },
                            { y: 605, label: "INFRASTRUCTURE", color: "#f43f5e" },
                            { y: 708, label: "DATA LAYER", color: "#3b82f6" },
                          ].map((layer) => (
                            <g key={layer.label}>
                              <rect
                                x="2"
                                y={layer.y}
                                width="8"
                                height="60"
                                rx="4"
                                fill={layer.color}
                                opacity="0.3"
                              />
                              <text
                                x="16"
                                y={layer.y + 10}
                                fontSize="8"
                                fill={layer.color}
                                fontWeight="700"
                                opacity="0.6"
                                letterSpacing="1"
                              >
                                {layer.label}
                              </text>
                            </g>
                          ))}

                          {/* Connections */}
                          {overviewConnections.map((conn, i) => {
                            const points = getConnectionPoints(
                              conn.from,
                              conn.to,
                              overviewNodes
                            );
                            return (
                              <ConnectionLine
                                key={`${conn.from}-${conn.to}-${i}`}
                                {...points}
                                color={conn.color}
                                animated={conn.animated}
                                dashed={conn.dashed}
                                label={conn.label}
                              />
                            );
                          })}

                          {/* Nodes */}
                          {overviewNodes.map((node) => (
                            <ArchitectureNode
                              key={node.id}
                              node={node}
                              onClick={setSelectedNode}
                              isSelected={selectedNode?.id === node.id}
                            />
                          ))}

                          {/* Pulse indicators for active services */}
                          <PulseDot x={325} y={440} color="#10b981" />
                          <PulseDot x={450} y={440} color="#f59e0b" />
                          <PulseDot x={575} y={440} color="#8b5cf6" />
                        </svg>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Detail Panel */}
                <div className="lg:col-span-1">
                  <Card className="sticky top-24 h-fit">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center gap-2">
                        <Info className="w-4 h-4 text-blue-500" />
                        Node Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {selectedNode ? (
                        <div className="space-y-4">
                          <div
                            className="p-3 rounded-lg border-2"
                            style={{
                              backgroundColor: selectedNode.bgColor,
                              borderColor: selectedNode.borderColor,
                            }}
                          >
                            <h3
                              className="font-bold text-sm"
                              style={{ color: selectedNode.color }}
                            >
                              {selectedNode.label}
                            </h3>
                            <p className="text-xs text-slate-600 mt-1">
                              {selectedNode.description}
                            </p>
                          </div>

                          {selectedNode.tech && (
                            <div>
                              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                                Technologies
                              </h4>
                              <div className="flex flex-wrap gap-1.5">
                                {selectedNode.tech.map((t) => (
                                  <Badge
                                    key={t}
                                    variant="secondary"
                                    className="text-[10px] px-2 py-0.5"
                                  >
                                    {t}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}

                          {selectedNode.details && (
                            <div>
                              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                                Features & Details
                              </h4>
                              <ScrollArea className="h-[300px]">
                                <ul className="space-y-1.5">
                                  {selectedNode.details.map((detail, i) => (
                                    <li
                                      key={i}
                                      className="flex items-start gap-2 text-xs text-slate-600"
                                    >
                                      <CheckCircle2
                                        className="w-3 h-3 mt-0.5 flex-shrink-0"
                                        style={{ color: selectedNode.color }}
                                      />
                                      {detail}
                                    </li>
                                  ))}
                                </ul>
                              </ScrollArea>
                            </div>
                          )}

                          <Badge
                            variant="outline"
                            className="text-[10px]"
                            style={{
                              color: selectedNode.color,
                              borderColor: selectedNode.borderColor,
                            }}
                          >
                            Category: {selectedNode.category}
                          </Badge>
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <MousePointerClick className="w-8 h-8 text-slate-300 mx-auto mb-3" />
                          <p className="text-sm text-slate-400">
                            Click on any node in the diagram to see its details
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
                {[
                  { label: "Warehouses", value: "400", icon: <Warehouse className="w-4 h-4" />, color: "text-blue-600" },
                  { label: "Services", value: "14", icon: <Server className="w-4 h-4" />, color: "text-emerald-600" },
                  { label: "DB Tables", value: "100+", icon: <Database className="w-4 h-4" />, color: "text-amber-600" },
                  { label: "API Endpoints", value: "200+", icon: <Code2 className="w-4 h-4" />, color: "text-violet-600" },
                  { label: "Pages/Views", value: "50+", icon: <Monitor className="w-4 h-4" />, color: "text-pink-600" },
                  { label: "Team Size", value: "8-10", icon: <Users className="w-4 h-4" />, color: "text-cyan-600" },
                  { label: "Timeline", value: "8 Mo", icon: <Calendar className="w-4 h-4" />, color: "text-orange-600" },
                  { label: "Budget", value: "$200K", icon: <DollarSign className="w-4 h-4" />, color: "text-red-600" },
                ].map((stat) => (
                  <Card key={stat.label} className="text-center p-3">
                    <div className={`${stat.color} flex justify-center mb-1`}>
                      {stat.icon}
                    </div>
                    <div className="text-lg font-bold text-slate-900">
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* ============================================================ */}
            {/* TAB 2: MODULES                                               */}
            {/* ============================================================ */}
            <TabsContent value="modules" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {modules.map((module) => (
                  <Card
                    key={module.id}
                    className={`transition-all duration-200 hover:shadow-lg cursor-pointer ${
                      hoveredModule === module.id ? "ring-2 ring-offset-2" : ""
                    } ${module.borderColor} border-2`}
                    onMouseEnter={() => setHoveredModule(module.id)}
                    onMouseLeave={() => setHoveredModule(null)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 rounded-lg ${module.color} flex items-center justify-center text-white`}
                          >
                            {module.icon}
                          </div>
                          <div>
                            <CardTitle className="text-sm">
                              {module.name}
                            </CardTitle>
                            <CardDescription className="text-xs">
                              {module.endpoints} endpoints • {module.complexity}{" "}
                              complexity
                            </CardDescription>
                          </div>
                        </div>
                        <Badge
                          variant="outline"
                          className={`text-[10px] ${module.textColor} ${module.borderColor}`}
                        >
                          {module.tables.length} tables
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">
                            Key Features
                          </h4>
                          <ScrollArea className="h-[200px]">
                            <ul className="space-y-1">
                              {module.features.map((feature, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-xs text-slate-600"
                                >
                                  <Check
                                    className={`w-3 h-3 mt-0.5 flex-shrink-0 ${module.textColor}`}
                                  />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </ScrollArea>
                        </div>
                        <Separator />
                        <div>
                          <h4 className="text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">
                            Database Tables
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {module.tables.map((table) => (
                              <Badge
                                key={table}
                                variant="secondary"
                                className="text-[10px] font-mono"
                              >
                                {table}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Module Interconnections */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Link className="w-5 h-5 text-indigo-500" />
                    Module Interconnections
                  </CardTitle>
                  <CardDescription>
                    How modules communicate with each other
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <svg viewBox="0 0 800 280" className="w-full h-auto">
                      <defs>
                        <filter id="glow">
                          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      {/* Central Event Bus */}
                      <rect
                        x="300"
                        y="110"
                        width="200"
                        height="40"
                        rx="20"
                        fill="#6366f1"
                        opacity="0.1"
                        stroke="#6366f1"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />
                      <text
                        x="400"
                        y="135"
                        textAnchor="middle"
                        fontSize="12"
                        fill="#6366f1"
                        fontWeight="700"
                      >
                        EVENT BUS (Redis Pub/Sub)
                      </text>

                      {/* Modules around the event bus */}
                      {[
                        { name: "Inventory", x: 50, y: 30, color: "#10b981" },
                        { name: "Orders", x: 230, y: 10, color: "#f59e0b" },
                        { name: "Warehouse", x: 420, y: 10, color: "#3b82f6" },
                        { name: "Fleet", x: 610, y: 30, color: "#8b5cf6" },
                        { name: "Reports", x: 50, y: 200, color: "#ec4899" },
                        { name: "Notifications", x: 230, y: 220, color: "#f97316" },
                        { name: "Billing", x: 420, y: 220, color: "#14b8a6" },
                        { name: "Employees", x: 610, y: 200, color: "#06b6d4" },
                      ].map((mod, i) => (
                        <g key={mod.name}>
                          <rect
                            x={mod.x}
                            y={mod.y}
                            width="120"
                            height="45"
                            rx="8"
                            fill="white"
                            stroke={mod.color}
                            strokeWidth="2"
                          />
                          <circle
                            cx={mod.x + 20}
                            cy={mod.y + 22}
                            r="8"
                            fill={mod.color}
                            opacity="0.2"
                          />
                          <text
                            x={mod.x + 60}
                            y={mod.y + 26}
                            textAnchor="middle"
                            fontSize="11"
                            fill={mod.color}
                            fontWeight="600"
                          >
                            {mod.name}
                          </text>
                          {/* Connection to event bus */}
                          <line
                            x1={mod.x + 60}
                            y1={mod.y < 130 ? mod.y + 45 : mod.y}
                            x2={400}
                            y2={mod.y < 130 ? 110 : 150}
                            stroke={mod.color}
                            strokeWidth="1.5"
                            opacity="0.3"
                            strokeDasharray="4,3"
                          />
                          <circle
                            cx={mod.x + 60}
                            cy={mod.y < 130 ? mod.y + 45 : mod.y}
                            r="3"
                            fill={mod.color}
                          />
                        </g>
                      ))}
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* ============================================================ */}
            {/* TAB 3: TECH STACK                                            */}
            {/* ============================================================ */}
            <TabsContent value="tech" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {techStack.map((layer) => (
                  <Card
                    key={layer.layer}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-lg ${layer.bgColor} flex items-center justify-center ${layer.color}`}
                        >
                          {layer.icon}
                        </div>
                        <CardTitle className="text-sm">{layer.layer}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {layer.technologies.map((tech) => (
                          <div
                            key={tech.name}
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors"
                          >
                            <span className="text-lg">{tech.icon}</span>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-slate-900 truncate">
                                {tech.name}
                              </p>
                              <p className="text-xs text-slate-500 truncate">
                                {tech.purpose}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Tech Decision Rationale */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-500" />
                    Why This Tech Stack?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-emerald-600 flex items-center gap-2">
                        <ThumbsUp className="w-4 h-4" />
                        Key Decisions (DO)
                      </h4>
                      {[
                        "Use open-source everywhere (no license costs)",
                        "Start as Modular Monolith → split later",
                        "Use NestJS (enterprise patterns built-in)",
                        "PostgreSQL for ACID + JSON support",
                        "Redis for cache + sessions + pub/sub",
                        "Hire remote team (cost-effective regions)",
                        "Use managed services (RDS, ElastiCache)",
                        "MVP first → advanced features later",
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-emerald-500 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-red-600 flex items-center gap-2">
                        <XCircle className="w-4 h-4" />
                        Avoid (DON&apos;T)
                      </h4>
                      {[
                        "Don't start with microservices (too complex)",
                        "Don't build custom auth from scratch",
                        "Don't use Kafka until truly needed",
                        "Don't hire expensive devs for all roles",
                        "Don't over-engineer IoT integration initially",
                        "Don't build custom chart libraries",
                        "Don't deploy to multiple regions initially",
                        "Don't skip automated testing",
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                          <XCircle className="w-3.5 h-3.5 mt-0.5 text-red-400 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* ============================================================ */}
            {/* TAB 4: DATABASE SCHEMA                                       */}
            {/* ============================================================ */}
            <TabsContent value="database" className="space-y-6">
              {/* ER Diagram */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Database className="w-5 h-5 text-blue-500" />
                    Entity Relationship Overview
                  </CardTitle>
                  <CardDescription>
                    Core tables and their relationships (100+ tables in production)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-50 rounded-lg p-4 overflow-auto">
                    <svg viewBox="0 0 900 500" className="w-full h-auto" style={{ minWidth: "800px" }}>
                      {/* Tables as nodes */}
                      {[
                        {
                          name: "warehouses",
                          fields: ["id (PK)", "warehouse_code", "name", "city", "status"],
                          x: 20,
                          y: 20,
                          color: "#3b82f6",
                        },
                        {
                          name: "warehouse_zones",
                          fields: ["id (PK)", "warehouse_id (FK)", "zone_code", "zone_type"],
                          x: 220,
                          y: 20,
                          color: "#3b82f6",
                        },
                        {
                          name: "storage_locations",
                          fields: ["id (PK)", "zone_id (FK)", "location_code", "aisle/rack/shelf/bin"],
                          x: 420,
                          y: 20,
                          color: "#3b82f6",
                        },
                        {
                          name: "products",
                          fields: ["id (PK)", "sku", "name", "category_id (FK)", "barcode"],
                          x: 640,
                          y: 20,
                          color: "#10b981",
                        },
                        {
                          name: "inventory",
                          fields: ["id (PK)", "warehouse_id (FK)", "product_id (FK)", "quantity", "lot_number"],
                          x: 20,
                          y: 170,
                          color: "#10b981",
                        },
                        {
                          name: "inventory_txns",
                          fields: ["id (PK)", "product_id (FK)", "type", "quantity", "performed_by (FK)"],
                          x: 250,
                          y: 170,
                          color: "#10b981",
                        },
                        {
                          name: "orders",
                          fields: ["id (PK)", "order_number", "warehouse_id (FK)", "status", "total"],
                          x: 480,
                          y: 170,
                          color: "#f59e0b",
                        },
                        {
                          name: "order_items",
                          fields: ["id (PK)", "order_id (FK)", "product_id (FK)", "qty_ordered", "qty_shipped"],
                          x: 700,
                          y: 170,
                          color: "#f59e0b",
                        },
                        {
                          name: "vehicles",
                          fields: ["id (PK)", "vehicle_number", "type", "gps_device_id", "status"],
                          x: 20,
                          y: 320,
                          color: "#8b5cf6",
                        },
                        {
                          name: "trips",
                          fields: ["id (PK)", "vehicle_id (FK)", "driver_id (FK)", "status", "distance"],
                          x: 230,
                          y: 320,
                          color: "#8b5cf6",
                        },
                        {
                          name: "employees",
                          fields: ["id (PK)", "employee_code", "warehouse_id (FK)", "role", "status"],
                          x: 460,
                          y: 320,
                          color: "#06b6d4",
                        },
                        {
                          name: "attendance",
                          fields: ["id (PK)", "employee_id (FK)", "date", "clock_in", "clock_out"],
                          x: 680,
                          y: 320,
                          color: "#06b6d4",
                        },
                      ].map((table) => (
                        <g key={table.name}>
                          {/* Table header */}
                          <rect
                            x={table.x}
                            y={table.y}
                            width="185"
                            height="28"
                            rx="6"
                            ry="6"
                            fill={table.color}
                          />
                          <text
                            x={table.x + 92}
                            y={table.y + 18}
                            textAnchor="middle"
                            fontSize="11"
                            fill="white"
                            fontWeight="700"
                            fontFamily="monospace"
                          >
                            {table.name}
                          </text>
                          {/* Table body */}
                          <rect
                            x={table.x}
                            y={table.y + 28}
                            width="185"
                            height={table.fields.length * 18 + 8}
                            fill="white"
                            stroke={table.color}
                            strokeWidth="1.5"
                            rx="0"
                            ry="0"
                          />
                          {/* Rounded bottom */}
                          <rect
                            x={table.x}
                            y={table.y + 28 + table.fields.length * 18 + 8 - 6}
                            width="185"
                            height="6"
                            fill="white"
                            stroke={table.color}
                            strokeWidth="1.5"
                            rx="6"
                            ry="6"
                          />
                          {/* Fields */}
                          {table.fields.map((field, fi) => (
                            <text
                              key={field}
                              x={table.x + 10}
                              y={table.y + 45 + fi * 18}
                              fontSize="9"
                              fill="#475569"
                              fontFamily="monospace"
                            >
                              {field.includes("PK") ? "🔑 " : field.includes("FK") ? "🔗 " : "   "}
                              {field}
                            </text>
                          ))}
                        </g>
                      ))}

                      {/* Relationship lines */}
                      {[
                        { x1: 205, y1: 60, x2: 220, y2: 60, label: "1:N" },
                        { x1: 405, y1: 60, x2: 420, y2: 60, label: "1:N" },
                        { x1: 112, y1: 130, x2: 112, y2: 170, label: "N:1" },
                        { x1: 342, y1: 130, x2: 342, y2: 170, label: "1:N" },
                        { x1: 572, y1: 130, x2: 572, y2: 170, label: "1:N" },
                        { x1: 665, y1: 220, x2: 700, y2: 220, label: "1:N" },
                        { x1: 112, y1: 275, x2: 112, y2: 320, label: "1:N" },
                        { x1: 415, y1: 370, x2: 460, y2: 370, label: "N:1" },
                        { x1: 645, y1: 370, x2: 680, y2: 370, label: "1:N" },
                      ].map((rel, i) => (
                        <g key={i}>
                          <line
                            x1={rel.x1}
                            y1={rel.y1}
                            x2={rel.x2}
                            y2={rel.y2}
                            stroke="#94a3b8"
                            strokeWidth="1.5"
                          />
                          <text
                            x={(rel.x1 + rel.x2) / 2}
                            y={(rel.y1 + rel.y2) / 2 - 5}
                            textAnchor="middle"
                            fontSize="8"
                            fill="#94a3b8"
                            fontWeight="600"
                          >
                            {rel.label}
                          </text>
                        </g>
                      ))}
                    </svg>
                  </div>
                </CardContent>
              </Card>

              {/* Database Strategy */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    title: "PostgreSQL (Primary)",
                    icon: <Database className="w-5 h-5" />,
                    color: "text-blue-600",
                    bg: "bg-blue-50",
                    border: "border-blue-200",
                    items: [
                      "100+ tables, ACID compliant",
                      "Multi-AZ (high availability)",
                      "PgBouncer connection pooling",
                      "Table partitioning by warehouse_id",
                      "Automated daily backups",
                      "Point-in-time recovery",
                      "3 Read Replicas for reporting",
                      "Estimated: 500GB - 2TB",
                    ],
                  },
                  {
                    title: "Redis (Cache + Queue)",
                    icon: <Zap className="w-5 h-5" />,
                    color: "text-red-600",
                    bg: "bg-red-50",
                    border: "border-red-200",
                    items: [
                      "Session storage",
                      "API response caching",
                      "Rate limiter counters",
                      "Pub/Sub for real-time",
                      "Bull job queues",
                      "Dashboard metrics cache",
                      "Cluster mode enabled",
                      "TTL-based auto expiry",
                    ],
                  },
                  {
                    title: "MongoDB (Documents)",
                    icon: <Database className="w-5 h-5" />,
                    color: "text-green-600",
                    bg: "bg-green-50",
                    border: "border-green-200",
                    items: [
                      "GPS tracking data (high volume)",
                      "IoT sensor readings",
                      "Audit log storage",
                      "Flexible metadata storage",
                      "Time-series collections",
                      "Auto-archival to S3",
                      "Sharded for throughput",
                      "Estimated: 1TB+ (GPS data)",
                    ],
                  },
                ].map((db) => (
                  <Card key={db.title} className={`${db.border} border-2`}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-8 h-8 rounded-lg ${db.bg} flex items-center justify-center ${db.color}`}
                        >
                          {db.icon}
                        </div>
                        <CardTitle className="text-sm">{db.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1.5">
                        {db.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                            <Check className={`w-3 h-3 mt-0.5 ${db.color} flex-shrink-0`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* ============================================================ */}
            {/* TAB 5: SECURITY                                              */}
            {/* ============================================================ */}
            <TabsContent value="security" className="space-y-6">
              {/* Security Layers */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {securityLayers.map((layer) => (
                  <Card key={layer.layer} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className={`${layer.color}`}>{layer.icon}</div>
                        <CardTitle className="text-sm">{layer.layer}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {layer.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                            <ShieldCheck className={`w-3.5 h-3.5 mt-0.5 ${layer.color} flex-shrink-0`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* RBAC */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="w-5 h-5 text-violet-500" />
                    Role-Based Access Control (7 Roles)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {roles.map((role) => (
                      <div
                        key={role.role}
                        className="p-3 rounded-lg border bg-white hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className={role.color}>{role.icon}</span>
                          <h4 className={`text-sm font-bold ${role.color}`}>
                            {role.role}
                          </h4>
                        </div>
                        <p className="text-[10px] text-slate-500 mb-2">
                          {role.access}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {role.permissions.map((perm) => (
                            <Badge
                              key={perm}
                              variant="secondary"
                              className="text-[9px] px-1.5 py-0"
                            >
                              {perm}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Security Flow Diagram */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Lock className="w-5 h-5 text-red-500" />
                    Authentication Flow
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <svg viewBox="0 0 800 120" className="w-full h-auto">
                      {[
                        { label: "User Login", x: 0, color: "#3b82f6", icon: "👤" },
                        { label: "Validate Creds", x: 130, color: "#f59e0b", icon: "🔍" },
                        { label: "Check 2FA", x: 260, color: "#ef4444", icon: "🔐" },
                        { label: "Issue JWT", x: 390, color: "#10b981", icon: "🎫" },
                        { label: "Store Session", x: 520, color: "#8b5cf6", icon: "💾" },
                        { label: "Return Token", x: 650, color: "#06b6d4", icon: "✅" },
                      ].map((step, i) => (
                        <g key={step.label}>
                          <rect
                            x={step.x + 10}
                            y={20}
                            width="110"
                            height="70"
                            rx="10"
                            fill="white"
                            stroke={step.color}
                            strokeWidth="2"
                          />
                          <text
                            x={step.x + 65}
                            y={50}
                            textAnchor="middle"
                            fontSize="18"
                          >
                            {step.icon}
                          </text>
                          <text
                            x={step.x + 65}
                            y={72}
                            textAnchor="middle"
                            fontSize="10"
                            fill={step.color}
                            fontWeight="600"
                          >
                            {step.label}
                          </text>
                          {/* Step number */}
                          <circle
                            cx={step.x + 20}
                            cy={25}
                            r="10"
                            fill={step.color}
                          />
                          <text
                            x={step.x + 20}
                            y={29}
                            textAnchor="middle"
                            fontSize="10"
                            fill="white"
                            fontWeight="700"
                          >
                            {i + 1}
                          </text>
                          {/* Arrow */}
                          {i < 5 && (
                            <g>
                              <line
                                x1={step.x + 120}
                                y1={55}
                                x2={step.x + 140}
                                y2={55}
                                stroke="#94a3b8"
                                strokeWidth="2"
                                markerEnd="url(#arrowhead-flow)"
                              />
                            </g>
                          )}
                        </g>
                      ))}
                      <defs>
                        <marker
                          id="arrowhead-flow"
                          markerWidth="10"
                          markerHeight="7"
                          refX="10"
                          refY="3.5"
                          orient="auto"
                        >
                          <polygon
                            points="0 0, 10 3.5, 0 7"
                            fill="#94a3b8"
                          />
                        </marker>
                      </defs>
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* ============================================================ */}
            {/* TAB 6: INFRASTRUCTURE                                        */}
            {/* ============================================================ */}
            <TabsContent value="infra" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Cloud className="w-5 h-5 text-cyan-500" />
                    AWS Infrastructure Layout
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-b from-cyan-50/50 to-slate-50 rounded-lg p-4 overflow-auto">
                    <svg viewBox="0 0 800 500" className="w-full h-auto" style={{ minWidth: "700px" }}>
                      {/* VPC Border */}
                      <rect
                        x="20"
                        y="20"
                        width="760"
                        height="460"
                        rx="15"
                        fill="none"
                        stroke="#06b6d4"
                        strokeWidth="2"
                        strokeDasharray="8,4"
                      />
                      <text x="40" y="45" fontSize="14" fill="#06b6d4" fontWeight="700">
                        AWS VPC (10.0.0.0/16)
                      </text>

                      {/* Public Subnet */}
                      <rect
                        x="40"
                        y="60"
                        width="720"
                        height="90"
                        rx="10"
                        fill="#fef3c7"
                        stroke="#f59e0b"
                        strokeWidth="1.5"
                        opacity="0.5"
                      />
                      <text x="60" y="80" fontSize="11" fill="#92400e" fontWeight="600">
                        Public Subnet
                      </text>

                      {/* Public subnet components */}
                      {[
                        { label: "ALB", desc: "Load Balancer", x: 60, color: "#f59e0b" },
                        { label: "NAT Gateway", desc: "Internet Access", x: 250, color: "#f59e0b" },
                        { label: "Bastion Host", desc: "SSH Jump Box", x: 440, color: "#f59e0b" },
                        { label: "CloudFront", desc: "CDN", x: 620, color: "#f59e0b" },
                      ].map((comp) => (
                        <g key={comp.label}>
                          <rect
                            x={comp.x}
                            y={90}
                            width="150"
                            height="45"
                            rx="8"
                            fill="white"
                            stroke={comp.color}
                            strokeWidth="1.5"
                          />
                          <text
                            x={comp.x + 75}
                            y={108}
                            textAnchor="middle"
                            fontSize="11"
                            fill="#92400e"
                            fontWeight="600"
                          >
                            {comp.label}
                          </text>
                          <text
                            x={comp.x + 75}
                            y={125}
                            textAnchor="middle"
                            fontSize="9"
                            fill="#94a3b8"
                          >
                            {comp.desc}
                          </text>
                        </g>
                      ))}

                      {/* Private Subnet - App */}
                      <rect
                        x="40"
                        y="170"
                        width="720"
                        height="140"
                        rx="10"
                        fill="#dbeafe"
                        stroke="#3b82f6"
                        strokeWidth="1.5"
                        opacity="0.4"
                      />
                      <text x="60" y="190" fontSize="11" fill="#1e40af" fontWeight="600">
                        Private Subnet (Application) — Kubernetes EKS Cluster
                      </text>

                      {/* K8s pods */}
                      {[
                        { label: "Auth Svc", pods: "x3", x: 50, color: "#ef4444" },
                        { label: "Inventory", pods: "x5", x: 160, color: "#10b981" },
                        { label: "Orders", pods: "x5", x: 270, color: "#f59e0b" },
                        { label: "Fleet", pods: "x3", x: 380, color: "#8b5cf6" },
                        { label: "HRM", pods: "x3", x: 490, color: "#06b6d4" },
                        { label: "Reports", pods: "x3", x: 600, color: "#ec4899" },
                        { label: "Notif.", pods: "x2", x: 710, color: "#f97316" },
                      ].map((svc) => (
                        <g key={svc.label}>
                          <rect
                            x={svc.x}
                            y={205}
                            width="95"
                            height="50"
                            rx="6"
                            fill="white"
                            stroke={svc.color}
                            strokeWidth="1.5"
                          />
                          <text
                            x={svc.x + 47}
                            y={225}
                            textAnchor="middle"
                            fontSize="10"
                            fill={svc.color}
                            fontWeight="600"
                          >
                            {svc.label}
                          </text>
                          <rect
                            x={svc.x + 30}
                            y={235}
                            width="35"
                            height="14"
                            rx="7"
                            fill={svc.color}
                            opacity="0.15"
                          />
                          <text
                            x={svc.x + 47}
                            y={246}
                            textAnchor="middle"
                            fontSize="9"
                            fill={svc.color}
                          >
                            {svc.pods}
                          </text>
                        </g>
                      ))}

                      {/* HPA indicator */}
                      <text x="60" y="290" fontSize="9" fill="#3b82f6" fontWeight="500">
                        ⚡ HPA: Auto-scale min:3 → max:20 pods | CPU &gt; 70% trigger
                      </text>

                      {/* Private Subnet - Data */}
                      <rect
                        x="40"
                        y="320"
                        width="720"
                        height="145"
                        rx="10"
                        fill="#dcfce7"
                        stroke="#22c55e"
                        strokeWidth="1.5"
                        opacity="0.4"
                      />
                      <text x="60" y="340" fontSize="11" fill="#166534" fontWeight="600">
                        Private Subnet (Data Layer) — Managed Services
                      </text>

                      {/* Data components */}
                      {[
                        {
                          label: "RDS PostgreSQL",
                          desc: "Primary (Multi-AZ)",
                          x: 50,
                          w: 150,
                          color: "#3b82f6",
                        },
                        {
                          label: "RDS Read Replicas",
                          desc: "3 instances",
                          x: 220,
                          w: 140,
                          color: "#6366f1",
                        },
                        {
                          label: "ElastiCache Redis",
                          desc: "Cluster Mode",
                          x: 380,
                          w: 140,
                          color: "#dc2626",
                        },
                        {
                          label: "OpenSearch",
                          desc: "Elasticsearch",
                          x: 540,
                          w: 120,
                          color: "#84cc16",
                        },
                        {
                          label: "DocumentDB",
                          desc: "MongoDB compatible",
                          x: 680,
                          w: 130,
                          color: "#22c55e",
                        },
                      ].map((data) => (
                        <g key={data.label}>
                          <rect
                            x={data.x}
                            y={355}
                            width={data.w}
                            height="55"
                            rx="8"
                            fill="white"
                            stroke={data.color}
                            strokeWidth="1.5"
                          />
                          <circle
                            cx={data.x + 18}
                            cy={data.y ? data.y : 380}
                            r="8"
                            fill={data.color}
                            opacity="0.2"
                          />
                          <text
                            x={data.x + data.w / 2}
                            y={375}
                            textAnchor="middle"
                            fontSize="10"
                            fill={data.color}
                            fontWeight="600"
                          >
                            {data.label}
                          </text>
                          <text
                            x={data.x + data.w / 2}
                            y={395}
                            textAnchor="middle"
                            fontSize="9"
                            fill="#94a3b8"
                          >
                            {data.desc}
                          </text>
                        </g>
                      ))}

                      {/* S3 (outside VPC) */}
                      <text x="60" y="440" fontSize="9" fill="#166534" fontWeight="500">
                        📦 S3: File storage | 📊 CloudWatch: Monitoring | 📧 SES:
                        Emails | 🔔 SNS: Push | 🔑 Secrets Manager
                      </text>
                    </svg>
                  </div>
                </CardContent>
              </Card>

              {/* Monitoring */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    title: "Monitoring",
                    icon: <Activity className="w-5 h-5" />,
                    color: "text-blue-600",
                    bg: "bg-blue-50",
                    items: [
                      "Grafana + Prometheus (metrics)",
                      "CloudWatch (AWS resources)",
                      "Custom dashboards",
                      "Auto-scaling triggers",
                    ],
                  },
                  {
                    title: "Logging",
                    icon: <FileText className="w-5 h-5" />,
                    color: "text-emerald-600",
                    bg: "bg-emerald-50",
                    items: [
                      "ELK Stack (centralized)",
                      "Structured JSON logging",
                      "Log rotation & retention",
                      "Anomaly detection",
                    ],
                  },
                  {
                    title: "Alerting",
                    icon: <BellRing className="w-5 h-5" />,
                    color: "text-red-600",
                    bg: "bg-red-50",
                    items: [
                      "Slack (critical alerts)",
                      "Email (warning level)",
                      "PagerDuty (on-call)",
                      "SMS (system down)",
                    ],
                  },
                ].map((section) => (
                  <Card key={section.title}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-8 h-8 rounded-lg ${section.bg} flex items-center justify-center ${section.color}`}
                        >
                          {section.icon}
                        </div>
                        <CardTitle className="text-sm">{section.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1.5">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-slate-600">
                            <Check className={`w-3 h-3 ${section.color}`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Key Metrics */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Target className="w-4 h-4 text-indigo-500" />
                    SLA Targets
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { metric: "API Response (P95)", target: "< 200ms", icon: <Timer className="w-4 h-4" /> },
                      { metric: "Uptime SLA", target: "99.9%", icon: <Activity className="w-4 h-4" /> },
                      { metric: "Error Rate", target: "< 0.1%", icon: <AlertTriangle className="w-4 h-4" /> },
                      { metric: "Cache Hit Ratio", target: "> 85%", icon: <Zap className="w-4 h-4" /> },
                    ].map((m) => (
                      <div
                        key={m.metric}
                        className="text-center p-3 rounded-lg bg-slate-50 border"
                      >
                        <div className="text-indigo-500 flex justify-center mb-1">{m.icon}</div>
                        <div className="text-lg font-bold text-slate-900">{m.target}</div>
                        <div className="text-[10px] text-slate-500">{m.metric}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* ============================================================ */}
            {/* TAB 7: BUDGET                                                */}
            {/* ============================================================ */}
            <TabsContent value="budget" className="space-y-6">
              {/* Budget Overview */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {budgetData.map((item) => (
                  <Card key={item.category}>
                    <CardContent className="pt-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xs font-medium text-slate-500">
                          {item.category}
                        </h3>
                        <Badge variant="secondary" className="text-xs">
                          {item.percentage}%
                        </Badge>
                      </div>
                      <div className="text-2xl font-bold text-slate-900 mb-2">
                        ${item.amount.toLocaleString()}
                      </div>
                      <Progress value={item.percentage} className="h-2" />
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Budget Pie Chart (SVG) */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <PieChart className="w-5 h-5 text-indigo-500" />
                    Budget Distribution — $200,000 Total
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Pie Chart */}
                    <div className="flex items-center justify-center">
                      <svg viewBox="0 0 300 300" className="w-full max-w-[300px]">
                        {/* Development - 60% */}
                        <circle
                          cx="150"
                          cy="150"
                          r="100"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="40"
                          strokeDasharray="376.99 628.32"
                          strokeDashoffset="0"
                          transform="rotate(-90 150 150)"
                        />
                        {/* Infrastructure - 20% */}
                        <circle
                          cx="150"
                          cy="150"
                          r="100"
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="40"
                          strokeDasharray="125.66 628.32"
                          strokeDashoffset="-376.99"
                          transform="rotate(-90 150 150)"
                        />
                        {/* Third-party - 10% */}
                        <circle
                          cx="150"
                          cy="150"
                          r="100"
                          fill="none"
                          stroke="#f59e0b"
                          strokeWidth="40"
                          strokeDasharray="62.83 628.32"
                          strokeDashoffset="-502.65"
                          transform="rotate(-90 150 150)"
                        />
                        {/* Contingency - 10% */}
                        <circle
                          cx="150"
                          cy="150"
                          r="100"
                          fill="none"
                          stroke="#ef4444"
                          strokeWidth="40"
                          strokeDasharray="62.83 628.32"
                          strokeDashoffset="-565.49"
                          transform="rotate(-90 150 150)"
                        />
                        {/* Center text */}
                        <circle cx="150" cy="150" r="70" fill="white" />
                        <text
                          x="150"
                          y="142"
                          textAnchor="middle"
                          fontSize="20"
                          fontWeight="700"
                          fill="#1e293b"
                        >
                          $200K
                        </text>
                        <text
                          x="150"
                          y="162"
                          textAnchor="middle"
                          fontSize="10"
                          fill="#94a3b8"
                        >
                          Total Budget
                        </text>
                      </svg>
                    </div>

                    {/* Legend + Details */}
                    <div className="space-y-4">
                      {budgetData.map((item) => (
                        <Accordion type="single" collapsible key={item.category}>
                          <AccordionItem value={item.category} className="border rounded-lg px-3">
                            <AccordionTrigger className="py-3 text-sm hover:no-underline">
                              <div className="flex items-center gap-3">
                                <div className={`w-3 h-3 rounded-full ${item.color}`} />
                                <span className="font-medium">{item.category}</span>
                                <Badge variant="outline" className="text-xs ml-auto mr-2">
                                  ${item.amount.toLocaleString()}
                                </Badge>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-2 pl-6">
                                {item.items.map((sub) => (
                                  <div
                                    key={sub.role}
                                    className="flex items-center justify-between text-xs text-slate-600"
                                  >
                                    <span>
                                      {sub.role}
                                      {sub.count > 1 ? ` (×${sub.count})` : ""}
                                    </span>
                                    <span className="font-mono font-medium">
                                      ${(sub.cost * (sub.count > 1 ? 1 : 1)).toLocaleString()}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Cost Comparison */}
              <Card className="border-amber-200 bg-amber-50/30">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-amber-800 text-sm">
                        Is $200K enough for this project?
                      </h3>
                      <p className="text-xs text-amber-700 mt-1">
                        A US-based team would cost <strong>$800K - $1.5M</strong> for
                        this project. With smart remote hiring (India, Pakistan, Eastern
                        Europe), $200K is achievable by:
                      </p>
                      <ul className="text-xs text-amber-700 mt-2 space-y-1">
                        <li>✅ Hiring remote talent at $2K-5K/month per developer</li>
                        <li>✅ Starting with Modular Monolith (save 2 months)</li>
                        <li>✅ Using 100% open-source stack (zero license fees)</li>
                        <li>✅ Phased delivery (MVP first, then iterate)</li>
                        <li>✅ Using managed AWS services (less DevOps overhead)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* ============================================================ */}
            {/* TAB 8: TIMELINE                                              */}
            {/* ============================================================ */}
            <TabsContent value="timeline" className="space-y-6">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[22px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-emerald-500 via-amber-500 via-violet-500 to-red-500" />

                <div className="space-y-6">
                  {timeline.map((month, index) => (
                    <div key={month.month} className="relative pl-12">
                      {/* Timeline dot */}
                      <div
                        className={`absolute left-[14px] top-[22px] w-[18px] h-[18px] rounded-full ${month.color} flex items-center justify-center ring-4 ring-white`}
                      >
                        <span className="text-white text-[8px] font-bold">
                          {index + 1}
                        </span>
                      </div>

                      <Card
                        className={`transition-all duration-200 hover:shadow-lg ${
                          month.progress === 100
                            ? "border-emerald-200 bg-emerald-50/20"
                            : month.progress > 50
                            ? "border-amber-200"
                            : ""
                        }`}
                      >
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <Badge
                                  variant="outline"
                                  className="text-xs font-mono"
                                >
                                  {month.month}
                                </Badge>
                                <Badge
                                  variant="secondary"
                                  className={`text-[10px] ${
                                    month.phase === "Launch"
                                      ? "bg-red-100 text-red-700"
                                      : ""
                                  }`}
                                >
                                  {month.phase}
                                </Badge>
                              </div>
                              <CardTitle className="text-base">
                                {month.title}
                              </CardTitle>
                            </div>
                            <div className="text-right">
                              <div className="text-xs text-slate-500 mb-1">
                                Progress
                              </div>
                              <div className="w-24">
                                <Progress
                                  value={month.progress}
                                  className="h-2"
                                />
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">
                                Tasks
                              </h4>
                              <ul className="space-y-1.5">
                                {month.tasks.map((task, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-2 text-xs text-slate-600"
                                  >
                                    {month.progress === 100 ? (
                                      <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-emerald-500 flex-shrink-0" />
                                    ) : (
                                      <Circle className="w-3.5 h-3.5 mt-0.5 text-slate-300 flex-shrink-0" />
                                    )}
                                    {task}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">
                                Deliverable
                              </h4>
                              <div
                                className={`p-3 rounded-lg border-2 ${
                                  month.deliverable.includes("🚀")
                                    ? "border-red-300 bg-red-50"
                                    : "border-slate-200 bg-slate-50"
                                }`}
                              >
                                <p
                                  className={`text-sm font-semibold ${
                                    month.deliverable.includes("🚀")
                                      ? "text-red-700"
                                      : "text-slate-700"
                                  }`}
                                >
                                  {month.deliverable}
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phased Rollout */}
              <Card className="border-indigo-200">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Rocket className="w-5 h-5 text-indigo-500" />
                    Warehouse Rollout Strategy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {[
                      {
                        phase: "Pilot",
                        warehouses: "10",
                        when: "Month 7",
                        icon: <Play className="w-4 h-4" />,
                        color: "text-blue-600",
                        bg: "bg-blue-50",
                      },
                      {
                        phase: "Early Access",
                        warehouses: "50",
                        when: "Month 8 (Wk 1-2)",
                        icon: <Users className="w-4 h-4" />,
                        color: "text-amber-600",
                        bg: "bg-amber-50",
                      },
                      {
                        phase: "General",
                        warehouses: "200",
                        when: "Month 8 (Wk 3)",
                        icon: <Globe className="w-4 h-4" />,
                        color: "text-emerald-600",
                        bg: "bg-emerald-50",
                      },
                      {
                        phase: "Full Rollout",
                        warehouses: "400",
                        when: "Month 8 (Wk 4)",
                        icon: <Rocket className="w-4 h-4" />,
                        color: "text-red-600",
                        bg: "bg-red-50",
                      },
                    ].map((phase) => (
                      <div
                        key={phase.phase}
                        className={`p-4 rounded-lg border ${phase.bg} text-center`}
                      >
                        <div
                          className={`${phase.color} flex justify-center mb-2`}
                        >
                          {phase.icon}
                        </div>
                        <div className="text-2xl font-bold text-slate-900">
                          {phase.warehouses}
                        </div>
                        <div className="text-xs text-slate-500">Warehouses</div>
                        <Badge variant="outline" className="mt-2 text-[10px]">
                          {phase.when}
                        </Badge>
                        <div className={`text-xs font-semibold mt-1 ${phase.color}`}>
                          {phase.phase}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* ============ FOOTER ============ */}
        <div className="border-t bg-white mt-8">
          <div className="max-w-[1400px] mx-auto px-4 py-4">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <Gem className="w-4 h-4 text-indigo-500" />
                <span>
                  WMS Architecture Blueprint v1.0 — Designed for{" "}
                  <strong>400 warehouses</strong> at{" "}
                  <strong>$200K budget</strong>
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span>14 Microservices</span>
                <span>•</span>
                <span>100+ DB Tables</span>
                <span>•</span>
                <span>200+ API Endpoints</span>
                <span>•</span>
                <span>8 Month Timeline</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}