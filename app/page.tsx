"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Database,
  Server,
  Shield,
  Truck,
  Users,
  Warehouse,
  Package,
  BarChart3,
  Globe,
  Cpu,
  HardDrive,
  Lock,
  Bell,
  DollarSign,
  Calendar,
  Layers,
  GitBranch,
  Monitor,
  Smartphone,
  Cloud,
  ArrowRight,
  ArrowDown,
  CircleDot,
  Zap,
  Eye,
  Settings,
  AlertTriangle,
  TrendingUp,
  Clock,
  MapPin,
  Boxes,
  ClipboardList,
  CreditCard,
  Network,
  ChevronRight,
  Code2,
  FolderTree,
  Terminal,
  Rocket,
  Target,
  Activity,
  Radio,
  Wifi,
  KeyRound,
  ScanLine,
  Download,
  RefreshCw,
  Search,
  ChevronDown,
  Info,
  Lightbulb,
  Sparkles,
  ArrowUpRight,
  Hexagon,
  Circle,
  Minus,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────
   GLOSSY CARD COMPONENT
   Glass-morphism card with dark theme
───────────────────────────────────────────────────────── */
const GlossyCard = ({
  children,
  className = "",
  glow,
}: {
  children: React.ReactNode;
  className?: string;
  glow?: "white" | "blue" | "green" | "purple" | "orange" | "red" | "cyan";
}) => {
  const glowMap: Record<string, string> = {
    white: "shadow-[0_0_30px_rgba(255,255,255,0.03)]",
    blue: "shadow-[0_0_30px_rgba(59,130,246,0.06)]",
    green: "shadow-[0_0_30px_rgba(34,197,94,0.06)]",
    purple: "shadow-[0_0_30px_rgba(168,85,247,0.06)]",
    orange: "shadow-[0_0_30px_rgba(249,115,22,0.06)]",
    red: "shadow-[0_0_30px_rgba(239,68,68,0.06)]",
    cyan: "shadow-[0_0_30px_rgba(6,182,212,0.06)]",
  };

  return (
    <div
      className={`
        relative rounded-2xl border border-white/[0.06]
        bg-gradient-to-b from-white/[0.05] to-white/[0.02]
        backdrop-blur-xl
        ${glow ? glowMap[glow] : ""}
        ${className}
      `}
    >
      {/* Top highlight edge */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-t-2xl" />
      {children}
    </div>
  );
};

/* ─────────────────────────────────────────────────────────
   FLOW CONNECTOR (Vertical arrow between sections)
───────────────────────────────────────────────────────── */
const FlowConnector = ({ label }: { label?: string }) => (
  <div className="flex flex-col items-center my-4">
    <div className="w-px h-6 bg-gradient-to-b from-white/20 to-white/5" />
    {label && (
      <span className="text-[10px] text-white/30 font-medium tracking-widest uppercase bg-white/[0.03] border border-white/[0.06] px-3 py-1 rounded-full my-1.5">
        {label}
      </span>
    )}
    <ArrowDown className="w-3 h-3 text-white/20" />
  </div>
);

/* ─────────────────────────────────────────────────────────
   ARCHITECTURE NODE (Individual service/component box)
───────────────────────────────────────────────────────── */
const ArchNode = ({
  icon: Icon,
  title,
  subtitle,
  active,
  size = "md",
}: {
  icon: React.ElementType;
  title: string;
  subtitle?: string;
  active?: boolean;
  size?: "sm" | "md" | "lg";
}) => {
  const sizeClasses = {
    sm: "p-2.5 min-w-[90px]",
    md: "p-3.5 min-w-[110px]",
    lg: "p-4 min-w-[140px]",
  };
  const iconSize = { sm: 14, md: 16, lg: 20 };

  return (
    <div
      className={`
        relative rounded-xl border border-white/[0.08]
        bg-gradient-to-b from-white/[0.06] to-white/[0.02]
        backdrop-blur-md
        flex flex-col items-center gap-1.5
        transition-all duration-300 hover:border-white/[0.15] hover:from-white/[0.08]
        cursor-default group
        ${sizeClasses[size]}
      `}
    >
      {active && (
        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/60" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 border border-black" />
        </span>
      )}
      <Icon
        size={iconSize[size]}
        className="text-white/60 group-hover:text-white/90 transition-colors"
      />
      <span className="font-semibold text-white/80 text-center leading-tight text-xs group-hover:text-white transition-colors">
        {title}
      </span>
      {subtitle && (
        <span className="text-[9px] text-white/30 text-center leading-tight">
          {subtitle}
        </span>
      )}
    </div>
  );
};

/* ─────────────────────────────────────────────────────────
   FEATURE ITEM (Checkmark + text)
───────────────────────────────────────────────────────── */
const FeatureItem = ({
  text,
  phase,
}: {
  text: string;
  phase?: 2 | 3;
}) => (
  <div className="flex items-start gap-2.5 py-1.5 group">
    <CheckCircle2
      className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${phase ? "text-white/20" : "text-emerald-400/70"}`}
    />
    <span className="text-[13px] text-white/50 group-hover:text-white/70 transition-colors leading-relaxed">
      {text}
    </span>
    {phase && (
      <Badge
        variant="outline"
        className="text-[9px] ml-auto shrink-0 border-white/[0.06] text-white/25 bg-transparent"
      >
        Phase {phase}
      </Badge>
    )}
  </div>
);

/* ─────────────────────────────────────────────────────────
   STAT CARD (KPI number cards)
───────────────────────────────────────────────────────── */
const StatCard = ({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: React.ElementType;
}) => (
  <GlossyCard>
    <div className="p-4 flex items-center justify-between">
      <div>
        <p className="text-[10px] text-white/25 uppercase tracking-[0.15em] font-medium">
          {label}
        </p>
        <p className="text-xl font-bold text-white/90 mt-1 tracking-tight">
          {value}
        </p>
      </div>
      <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
        <Icon size={18} className="text-white/30" />
      </div>
    </div>
  </GlossyCard>
);

/* ─────────────────────────────────────────────────────────
   SECTION HEADER Component
───────────────────────────────────────────────────────── */
const SectionHeader = ({
  number,
  icon: Icon,
  title,
  subtitle,
}: {
  number: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
}) => (
  <div className="flex items-start gap-4 mb-8">
    <div className="relative">
      <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
        <Icon size={20} className="text-white/50" />
      </div>
      <span className="absolute -top-2 -left-2 text-[10px] font-bold text-white/20 bg-black border border-white/[0.08] rounded-full w-5 h-5 flex items-center justify-center">
        {number}
      </span>
    </div>
    <div>
      <h2 className="text-2xl font-bold text-white/90 tracking-tight">
        {title}
      </h2>
      <p className="text-sm text-white/30 mt-0.5">{subtitle}</p>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
═══════════════════════════════════════════════════════════ */
export default function WMSArchitecturePage() {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-[#060608] text-white selection:bg-white/20">
        {/* Ambient background effects */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-white/[0.01] rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-white/[0.008] rounded-full blur-[100px]" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* ───────────────────────────────────────
            HERO SECTION
        ─────────────────────────────────────── */}
        <div className="relative border-b border-white/[0.04]">
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent" />

          <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16">
            {/* Top badges */}
            <div className="flex items-center gap-2 mb-6">
              {["Enterprise Grade", "Production Ready", "$200K Budget"].map(
                (label, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="bg-white/[0.03] border-white/[0.08] text-white/40 text-[10px] tracking-wider uppercase font-medium hover:bg-white/[0.06] transition-colors"
                  >
                    {label}
                  </Badge>
                )
              )}
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-white/90">Warehouse</span>
              <br />
              <span className="text-white/40">Management System</span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-white/30 max-w-2xl leading-relaxed">
              Production architecture blueprint for managing{" "}
              <span className="text-white/60 font-medium">400 warehouses</span>,
              inventory, fleet & employees —
              built for{" "}
              <span className="text-white/60 font-medium">
                billion-dollar operations
              </span>{" "}
              within a{" "}
              <span className="text-white/60 font-medium">$200K budget</span>.
            </p>

            {/* Stat Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-10">
              <StatCard label="Warehouses" value="400" icon={Warehouse} />
              <StatCard label="Modules" value="14" icon={Boxes} />
              <StatCard label="API Endpoints" value="200+" icon={Globe} />
              <StatCard label="DB Tables" value="100+" icon={Database} />
              <StatCard label="Timeline" value="8 Mo" icon={Calendar} />
              <StatCard label="Budget" value="$200K" icon={DollarSign} />
            </div>

            {/* Decorative line */}
            <div className="mt-12 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-white/[0.06] to-transparent" />
              <Sparkles className="w-3 h-3 text-white/10" />
              <div className="h-px flex-1 bg-gradient-to-l from-white/[0.06] to-transparent" />
            </div>
          </div>
        </div>

        {/* ───────────────────────────────────────
            MAIN CONTENT
        ─────────────────────────────────────── */}
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          {/* ═══════════════════════════════════
              SECTION 1: BUSINESS SCOPE
          ═══════════════════════════════════ */}
          <section className="mb-24">
            <SectionHeader
              number="01"
              icon={Target}
              title="Business Scope"
              subtitle="What exactly are we building and managing"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  icon: Warehouse,
                  title: "400 Warehouses",
                  desc: "Multi-location management across regions",
                  items: [
                    "Multiple types — Cold, Dry, Hazmat storage",
                    "Zone management — Receiving, Storage, Shipping",
                    "Location tracking — Aisle → Rack → Shelf → Bin",
                    "Capacity planning & utilization monitoring",
                  ],
                },
                {
                  icon: Package,
                  title: "Millions of SKUs",
                  desc: "Complete inventory lifecycle management",
                  items: [
                    "Real-time stock levels across all warehouses",
                    "Lot, Batch & Serial number tracking",
                    "FIFO / LIFO / FEFO picking strategies",
                    "Expiry management & reorder alerts",
                  ],
                },
                {
                  icon: Truck,
                  title: "Fleet of Trucks",
                  desc: "GPS-tracked fleet with route optimization",
                  items: [
                    "Real-time GPS tracking on live map",
                    "Trip planning & route optimization",
                    "Driver assignment & scheduling",
                    "Maintenance scheduling & fuel tracking",
                  ],
                },
                {
                  icon: Users,
                  title: "Thousands of Staff",
                  desc: "Workforce management across locations",
                  items: [
                    "7-level Role-Based Access Control",
                    "Shift scheduling & attendance tracking",
                    "Task assignment & performance metrics",
                    "Warehouse-level data isolation",
                  ],
                },
              ].map((card, i) => {
                const IconComp = card.icon;
                return (
                  <GlossyCard key={i} glow="white" className="group">
                    <div className="p-5">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-4 group-hover:bg-white/[0.08] transition-colors">
                        <IconComp
                          size={18}
                          className="text-white/40 group-hover:text-white/70 transition-colors"
                        />
                      </div>
                      <h3 className="text-base font-semibold text-white/80 mb-1">
                        {card.title}
                      </h3>
                      <p className="text-xs text-white/25 mb-4">{card.desc}</p>
                      <div className="space-y-2">
                        {card.items.map((item, j) => (
                          <div
                            key={j}
                            className="flex items-start gap-2 text-xs text-white/35"
                          >
                            <Minus className="w-3 h-3 mt-0.5 shrink-0 text-white/15" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </GlossyCard>
                );
              })}
            </div>

            {/* Info callout */}
            <GlossyCard className="mt-6" glow="white">
              <div className="p-5 flex items-start gap-4">
                <div className="p-2 rounded-lg bg-white/[0.04]">
                  <Info size={16} className="text-white/30" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/60 mb-1">
                    Billion Dollar Operations
                  </p>
                  <p className="text-xs text-white/30 leading-relaxed">
                    This system handles billions of dollars in inventory,
                    requires 99.9% uptime, full audit trails, real-time
                    tracking, and industry-regulation compliance. Every decision
                    prioritizes{" "}
                    <span className="text-white/50">
                      reliability, scalability, and security
                    </span>
                    .
                  </p>
                </div>
              </div>
            </GlossyCard>
          </section>

          {/* ═══════════════════════════════════
              SECTION 2: CORE MODULES
          ═══════════════════════════════════ */}
          <section className="mb-24">
            <SectionHeader
              number="02"
              icon={Boxes}
              title="Core Modules & Features"
              subtitle="14 interconnected modules powering the entire system"
            />

            {/* Module Dependency Map */}
            <GlossyCard glow="purple" className="mb-8">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Network size={16} className="text-white/30" />
                  <span className="text-sm font-semibold text-white/50 tracking-wide">
                    MODULE DEPENDENCY MAP
                  </span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <ArchNode
                    icon={KeyRound}
                    title="Authentication"
                    subtitle="JWT · RBAC · 2FA"
                    size="lg"
                  />
                  <FlowConnector label="Protects All Services" />

                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <ArchNode
                      icon={Warehouse}
                      title="Warehouse"
                      subtitle="400 Locations"
                    />
                    <div className="w-6 h-px bg-white/10" />
                    <ArchNode
                      icon={Package}
                      title="Inventory"
                      subtitle="Stock & SKUs"
                    />
                    <div className="w-6 h-px bg-white/10" />
                    <ArchNode
                      icon={ClipboardList}
                      title="Orders"
                      subtitle="In / Out / Transfer"
                    />
                  </div>
                  <FlowConnector label="Feeds Into" />

                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <ArchNode
                      icon={Download}
                      title="Receiving"
                      subtitle="Goods Receipt"
                      size="sm"
                    />
                    <ArchNode
                      icon={Rocket}
                      title="Shipping"
                      subtitle="Dispatch"
                      size="sm"
                    />
                    <ArchNode
                      icon={RefreshCw}
                      title="Returns"
                      subtitle="RMA"
                      size="sm"
                    />
                    <ArchNode
                      icon={ScanLine}
                      title="IoT"
                      subtitle="Scanners"
                      size="sm"
                    />
                  </div>
                  <FlowConnector label="Connects To" />

                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <ArchNode icon={Truck} title="Fleet" subtitle="GPS · Routes" size="sm" />
                    <ArchNode icon={Users} title="HRM" subtitle="Staff · Tasks" size="sm" />
                    <ArchNode icon={CreditCard} title="Billing" subtitle="Invoices" size="sm" />
                    <ArchNode icon={Bell} title="Notify" subtitle="Multi-channel" size="sm" />
                  </div>
                  <FlowConnector label="Generates" />

                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <ArchNode
                      icon={BarChart3}
                      title="Reports & BI"
                      subtitle="Dashboards"
                      size="lg"
                    />
                    <ArchNode
                      icon={Eye}
                      title="Audit Trail"
                      subtitle="Full Compliance"
                      size="lg"
                    />
                  </div>
                </div>
              </div>
            </GlossyCard>

            {/* Module Accordion */}
            <Accordion type="multiple" className="space-y-3">
              {[
                {
                  value: "warehouse",
                  icon: Warehouse,
                  title: "Module 1: Warehouse Management",
                  subtitle: "Manage all 400 locations, zones, and storage positions",
                  badge: "Core",
                  features: [
                    { text: "Add / Edit / Deactivate Warehouses (CRUD for 400)" },
                    { text: "Zone Management — Receiving, Storage, Picking, Shipping, Returns" },
                    { text: "Storage Location Management — Aisle → Rack → Shelf → Bin" },
                    { text: "Warehouse Dashboard with utilization percentage" },
                    { text: "Temperature Monitoring for Cold Storage zones" },
                    { text: "Capacity Planning tools" },
                    { text: "Multi-warehouse Transfer initiation" },
                    { text: "Dock Door Management" },
                    { text: "Warehouse-level permission isolation" },
                    { text: "Visual Warehouse Layout / Map Viewer", phase: 2 as const },
                  ],
                  tables: ["warehouses", "warehouse_zones", "storage_locations", "dock_doors"],
                  endpoints: [
                    { method: "GET", path: "/api/v1/warehouses" },
                    { method: "GET", path: "/api/v1/warehouses/:id" },
                    { method: "POST", path: "/api/v1/warehouses" },
                    { method: "PUT", path: "/api/v1/warehouses/:id" },
                    { method: "GET", path: "/api/v1/warehouses/:id/zones" },
                    { method: "GET", path: "/api/v1/warehouses/:id/dashboard" },
                  ],
                },
                {
                  value: "inventory",
                  icon: Package,
                  title: "Module 2: Inventory Management",
                  subtitle: "Track millions of SKUs, stock levels, movements & alerts",
                  badge: "Core",
                  features: [
                    { text: "Product Catalog with full SKU management" },
                    { text: "Real-time stock levels per warehouse" },
                    { text: "Stock In (Receiving) / Stock Out (Shipping)" },
                    { text: "Inter-warehouse Transfer processing" },
                    { text: "Lot / Batch / Serial Number tracking" },
                    { text: "Expiry Date Management (FEFO strategy)" },
                    { text: "FIFO / LIFO / FEFO picking strategies" },
                    { text: "Cycle Counting & Physical Inventory" },
                    { text: "Stock Adjustments with reason codes" },
                    { text: "Reorder Point Alerts (Min/Max levels)" },
                    { text: "Barcode / QR Code Generation & Scanning" },
                    { text: "Complete Stock Movement History" },
                    { text: "ABC Analysis — categorize by value", phase: 2 as const },
                    { text: "Demand Forecasting (ML-based)", phase: 3 as const },
                  ],
                  tables: ["products", "categories", "inventory", "inventory_transactions", "stock_counts"],
                  endpoints: [
                    { method: "GET", path: "/api/v1/inventory" },
                    { method: "POST", path: "/api/v1/inventory/receive" },
                    { method: "POST", path: "/api/v1/inventory/transfer" },
                    { method: "POST", path: "/api/v1/inventory/adjust" },
                    { method: "GET", path: "/api/v1/inventory/low-stock" },
                    { method: "GET", path: "/api/v1/inventory/expiring" },
                  ],
                },
                {
                  value: "orders",
                  icon: ClipboardList,
                  title: "Module 3: Order Management",
                  subtitle: "Full order lifecycle — inbound, outbound, transfers & returns",
                  badge: "Core",
                  features: [
                    { text: "Inbound Orders (Purchase Orders from suppliers)" },
                    { text: "Outbound Orders (Sales / Shipment orders)" },
                    { text: "Transfer Orders (Between warehouses)" },
                    { text: "Complete Order Lifecycle with state machine (10 states)" },
                    { text: "Pick List Generation optimized by location" },
                    { text: "Wave Picking & Batch Picking support" },
                    { text: "Pack Station Management" },
                    { text: "Shipping Label Generation" },
                    { text: "Order Priority — Low, Normal, High, Urgent" },
                    { text: "Backorder Management" },
                    { text: "Returns Processing (RMA workflow)" },
                    { text: "Split Shipments for partial fulfillment" },
                    { text: "Customer Portal with order tracking", phase: 3 as const },
                  ],
                  tables: ["orders", "order_items", "pick_lists", "shipments", "returns"],
                  endpoints: [
                    { method: "GET", path: "/api/v1/orders" },
                    { method: "POST", path: "/api/v1/orders" },
                    { method: "PATCH", path: "/api/v1/orders/:id/status" },
                    { method: "POST", path: "/api/v1/orders/:id/pick" },
                    { method: "POST", path: "/api/v1/orders/:id/ship" },
                    { method: "POST", path: "/api/v1/orders/:id/cancel" },
                  ],
                },
                {
                  value: "fleet",
                  icon: Truck,
                  title: "Module 4: Fleet & Truck Management",
                  subtitle: "GPS tracking, trips, routes, drivers & vehicle maintenance",
                  badge: "Core",
                  features: [
                    { text: "Vehicle Registry — all trucks, vans, trailers" },
                    { text: "Real-time GPS Tracking on live map" },
                    { text: "Route Planning & Optimization" },
                    { text: "Trip Management — plan, assign, track" },
                    { text: "Driver Assignment & Scheduling" },
                    { text: "Fuel Consumption Tracking" },
                    { text: "Maintenance Scheduling (preventive)" },
                    { text: "Vehicle Inspection Checklists" },
                    { text: "Delivery Proof — Photo + Digital Signature" },
                    { text: "ETA Calculations & Customer Notifications" },
                    { text: "Geofencing Alerts (zone enter/exit)" },
                    { text: "Insurance & Registration expiry tracking" },
                    { text: "Speed Monitoring & Driving Behavior", phase: 2 as const },
                    { text: "Load Optimization (maximize capacity)", phase: 2 as const },
                  ],
                  tables: ["vehicles", "trips", "trip_orders", "gps_logs", "maintenance_records"],
                  endpoints: [
                    { method: "GET", path: "/api/v1/vehicles" },
                    { method: "GET", path: "/api/v1/vehicles/:id/location" },
                    { method: "POST", path: "/api/v1/trips" },
                    { method: "PATCH", path: "/api/v1/trips/:id/status" },
                    { method: "POST", path: "/api/v1/trips/:id/delivery-proof" },
                    { method: "GET", path: "/api/v1/fleet/map" },
                  ],
                },
                {
                  value: "employees",
                  icon: Users,
                  title: "Module 5: Employee Management",
                  subtitle: "HR, shifts, attendance, tasks & performance tracking",
                  badge: "Core",
                  features: [
                    { text: "Complete Employee Directory with profiles" },
                    { text: "7-level Role-Based Access Control (RBAC)" },
                    { text: "Shift Scheduling — Morning, Afternoon, Night" },
                    { text: "Clock In / Clock Out Attendance Tracking" },
                    { text: "Task Assignment & Real-time Tracking" },
                    { text: "Performance Metrics — picks/hour, tasks/day" },
                    { text: "Leave Management — request, approve, track" },
                    { text: "Training & Certification Tracking" },
                    { text: "Warehouse-wise Employee Allocation" },
                    { text: "Labor Cost & Overtime Tracking" },
                    { text: "Employee Self-Service Portal", phase: 2 as const },
                  ],
                  tables: ["employees", "attendance", "employee_tasks", "shifts", "leaves"],
                  endpoints: [
                    { method: "GET", path: "/api/v1/employees" },
                    { method: "POST", path: "/api/v1/employees/:id/clock-in" },
                    { method: "POST", path: "/api/v1/employees/:id/clock-out" },
                    { method: "GET", path: "/api/v1/employees/:id/tasks" },
                    { method: "GET", path: "/api/v1/employees/:id/performance" },
                  ],
                },
                {
                  value: "reports",
                  icon: BarChart3,
                  title: "Module 6: Reporting & Analytics",
                  subtitle: "Dashboards, KPIs, exports & business intelligence",
                  badge: "Core",
                  features: [
                    { text: "Executive Dashboard — overview of all 400 warehouses" },
                    { text: "Warehouse-level Dashboard — deep dive per location" },
                    { text: "Inventory Reports — stock levels, valuation, aging" },
                    { text: "Order Fulfillment Reports — fill rate, cycle time" },
                    { text: "Fleet Performance Reports — utilization, fuel" },
                    { text: "Employee Productivity Reports" },
                    { text: "Financial Reports — revenue, costs, margins" },
                    { text: "Export to PDF, Excel, CSV" },
                    { text: "Scheduled Report Emails — daily, weekly, monthly" },
                    { text: "Real-time KPI Widgets" },
                    { text: "Custom Report Builder (drag & drop)", phase: 2 as const },
                    { text: "Predictive Analytics & Forecasting", phase: 3 as const },
                  ],
                  tables: ["report_schedules", "report_exports", "kpi_snapshots"],
                  endpoints: [
                    { method: "GET", path: "/api/v1/reports/dashboard" },
                    { method: "GET", path: "/api/v1/reports/inventory" },
                    { method: "GET", path: "/api/v1/reports/export/:format" },
                    { method: "POST", path: "/api/v1/reports/custom" },
                  ],
                },
              ].map((mod) => {
                const IconComp = mod.icon;
                return (
                  <AccordionItem
                    key={mod.value}
                    value={mod.value}
                    className="border border-white/[0.06] rounded-2xl bg-white/[0.01] data-[state=open]:bg-white/[0.02] overflow-hidden px-0"
                  >
                    <AccordionTrigger className="px-6 hover:no-underline hover:bg-white/[0.02] transition-colors [&[data-state=open]>div]:text-white/70">
                      <div className="flex items-center gap-4 text-white/40 transition-colors">
                        <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0">
                          <IconComp size={16} className="text-white/40" />
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-sm text-white/60">
                            {mod.title}
                          </div>
                          <div className="text-[11px] text-white/25">
                            {mod.subtitle}
                          </div>
                        </div>
                        <Badge
                          variant="outline"
                          className="ml-auto mr-4 border-white/[0.08] text-white/25 bg-transparent text-[10px]"
                        >
                          {mod.badge}
                        </Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="grid md:grid-cols-2 gap-8 pt-4">
                        {/* Features */}
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-medium mb-3">
                            Features
                          </p>
                          <div className="space-y-0.5">
                            {mod.features.map((f, j) => (
                              <FeatureItem key={j} text={f.text} phase={f.phase} />
                            ))}
                          </div>
                        </div>

                        {/* Tables + Endpoints */}
                        <div className="space-y-6">
                          <div>
                            <p className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-medium mb-3">
                              Database Tables
                            </p>
                            <div className="space-y-1.5">
                              {mod.tables.map((t, j) => (
                                <div
                                  key={j}
                                  className="flex items-center gap-2.5 text-xs py-1.5 px-3 rounded-lg bg-white/[0.02] border border-white/[0.04]"
                                >
                                  <Database className="w-3 h-3 text-white/20" />
                                  <span className="font-mono text-white/40 font-medium">
                                    {t}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <p className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-medium mb-3">
                              API Endpoints
                            </p>
                            <div className="space-y-1.5">
                              {mod.endpoints.map((ep, j) => {
                                const methodColors: Record<string, string> = {
                                  GET: "text-emerald-400/60 border-emerald-400/20 bg-emerald-400/5",
                                  POST: "text-blue-400/60 border-blue-400/20 bg-blue-400/5",
                                  PUT: "text-amber-400/60 border-amber-400/20 bg-amber-400/5",
                                  PATCH: "text-purple-400/60 border-purple-400/20 bg-purple-400/5",
                                  DELETE: "text-red-400/60 border-red-400/20 bg-red-400/5",
                                };
                                return (
                                  <div
                                    key={j}
                                    className="flex items-center gap-2.5 text-xs py-1.5 px-3 rounded-lg bg-white/[0.02] border border-white/[0.04]"
                                  >
                                    <Badge
                                      variant="outline"
                                      className={`text-[9px] font-mono px-1.5 py-0 ${methodColors[ep.method]}`}
                                    >
                                      {ep.method}
                                    </Badge>
                                    <span className="font-mono text-white/30 text-[11px]">
                                      {ep.path}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}

              {/* Remaining Modules */}
              <AccordionItem
                value="other-modules"
                className="border border-white/[0.06] rounded-2xl bg-white/[0.01] overflow-hidden px-0"
              >
                <AccordionTrigger className="px-6 hover:no-underline hover:bg-white/[0.02]">
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                      <Layers size={16} className="text-white/40" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-sm text-white/60">
                        Modules 7–14: Supporting Modules
                      </div>
                      <div className="text-[11px] text-white/25">
                        Billing, Notifications, Audit, IoT, Receiving, Shipping,
                        Returns, Integrations
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="ml-auto mr-4 border-white/[0.08] text-white/25 bg-transparent text-[10px]"
                    >
                      8 Modules
                    </Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 pt-4">
                    {[
                      {
                        icon: Download,
                        title: "7. Receiving",
                        features: ["Goods receipt", "Quality check", "Putaway optimization", "ASN processing"],
                      },
                      {
                        icon: Rocket,
                        title: "8. Shipping",
                        features: ["Carrier selection", "Label generation", "Truck loading", "Shipment tracking"],
                      },
                      {
                        icon: RefreshCw,
                        title: "9. Returns",
                        features: ["Return authorization", "Inspection", "Restock / Dispose", "Refund processing"],
                      },
                      {
                        icon: CreditCard,
                        title: "10. Billing",
                        features: ["Invoice generation", "Payment tracking", "Credit notes", "Financial ledger"],
                      },
                      {
                        icon: Bell,
                        title: "11. Notifications",
                        features: ["Email alerts", "SMS (Twilio)", "Push notifications", "In-app WebSocket"],
                      },
                      {
                        icon: Eye,
                        title: "12. Audit",
                        features: ["Complete action trail", "IP logging", "Change history", "Compliance reports"],
                      },
                      {
                        icon: ScanLine,
                        title: "13. IoT",
                        features: ["Barcode scanning", "RFID integration", "Temperature sensors", "Weight scales"],
                      },
                      {
                        icon: GitBranch,
                        title: "14. Integrations",
                        features: ["ERP (SAP)", "QuickBooks", "Shipping APIs", "Payment gateways"],
                      },
                    ].map((mod, i) => {
                      const IconComp = mod.icon;
                      return (
                        <div
                          key={i}
                          className="p-4 rounded-xl border border-white/[0.04] bg-white/[0.02] hover:bg-white/[0.03] transition-colors"
                        >
                          <IconComp
                            size={16}
                            className="text-white/30 mb-3"
                          />
                          <p className="text-xs font-semibold text-white/50 mb-2">
                            {mod.title}
                          </p>
                          {mod.features.map((f, j) => (
                            <div
                              key={j}
                              className="flex items-center gap-1.5 text-[11px] text-white/25 py-0.5"
                            >
                              <CheckCircle2 className="w-3 h-3 shrink-0 text-emerald-400/40" />
                              {f}
                            </div>
                          ))}
                        </div>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* ═══════════════════════════════════
              SECTION 3: TECHNOLOGY STACK
          ═══════════════════════════════════ */}
          <section className="mb-24">
            <SectionHeader
              number="03"
              icon={Code2}
              title="Technology Stack"
              subtitle="Open-source, cost-optimized for $200K budget"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  layer: "Frontend — Web",
                  icon: Monitor,
                  techs: [
                    { name: "Next.js 14", reason: "SSR, App Router, SEO — Free" },
                    { name: "TypeScript", reason: "Type safety at scale" },
                    { name: "Tailwind CSS", reason: "Rapid, consistent UI" },
                    { name: "ShadCN UI", reason: "Accessible components — Free" },
                    { name: "Zustand", reason: "Lightweight state" },
                    { name: "React Query", reason: "Server state + caching" },
                    { name: "Recharts", reason: "Dashboard charts" },
                    { name: "Zod", reason: "Runtime validation" },
                  ],
                },
                {
                  layer: "Frontend — Mobile",
                  icon: Smartphone,
                  techs: [
                    { name: "React Native", reason: "Cross-platform iOS + Android" },
                    { name: "Expo", reason: "Simplified build pipeline" },
                    { name: "Camera API", reason: "Barcode scanning" },
                    { name: "Maps SDK", reason: "GPS tracking for drivers" },
                    { name: "Push Notifications", reason: "FCM / APNs" },
                  ],
                },
                {
                  layer: "Backend",
                  icon: Server,
                  techs: [
                    { name: "NestJS", reason: "Enterprise-grade, modular, TS-native" },
                    { name: "TypeScript", reason: "End-to-end type safety" },
                    { name: "Prisma / TypeORM", reason: "ORM + migrations" },
                    { name: "Bull + Redis", reason: "Background job queues" },
                    { name: "Socket.io", reason: "Real-time WebSocket" },
                    { name: "Passport.js", reason: "Auth strategies" },
                    { name: "Swagger", reason: "Auto API docs" },
                    { name: "Winston", reason: "Structured logging" },
                  ],
                },
                {
                  layer: "Database & Storage",
                  icon: Database,
                  techs: [
                    { name: "PostgreSQL", reason: "Primary ACID DB — Free" },
                    { name: "Redis", reason: "Cache, sessions, pub/sub" },
                    { name: "MongoDB", reason: "IoT + GPS + audit logs" },
                    { name: "Elasticsearch", reason: "Full-text search" },
                    { name: "AWS S3", reason: "Files, images, exports" },
                  ],
                },
                {
                  layer: "DevOps & Cloud",
                  icon: Cloud,
                  techs: [
                    { name: "Docker", reason: "Containerize everything" },
                    { name: "Kubernetes (EKS)", reason: "Orchestration + auto-scale" },
                    { name: "GitHub Actions", reason: "CI/CD pipeline — Free" },
                    { name: "Terraform", reason: "Infrastructure as Code" },
                    { name: "AWS", reason: "EKS, RDS, S3, ALB, SES" },
                    { name: "CloudFlare", reason: "CDN, WAF, DDoS" },
                  ],
                },
                {
                  layer: "Monitoring & Security",
                  icon: Shield,
                  techs: [
                    { name: "Grafana + Prometheus", reason: "Metrics + alerts — Free" },
                    { name: "ELK Stack", reason: "Centralized logging" },
                    { name: "Sentry", reason: "Error tracking" },
                    { name: "Helmet.js", reason: "HTTP security headers" },
                    { name: "Rate Limiting", reason: "API abuse prevention" },
                    { name: "JWT + Refresh", reason: "Stateless auth" },
                  ],
                },
              ].map((stack, i) => {
                const IconComp = stack.icon;
                return (
                  <GlossyCard key={i} className="group">
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:bg-white/[0.08] transition-colors">
                          <IconComp size={15} className="text-white/40" />
                        </div>
                        <span className="font-semibold text-sm text-white/60">
                          {stack.layer}
                        </span>
                      </div>
                      <div className="space-y-3">
                        {stack.techs.map((tech, j) => (
                          <div key={j} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-3 h-3 mt-0.5 shrink-0 text-emerald-400/40" />
                            <div>
                              <span className="text-xs font-medium text-white/50">
                                {tech.name}
                              </span>
                              <span className="text-[11px] text-white/20 block">
                                {tech.reason}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </GlossyCard>
                );
              })}
            </div>
          </section>

          {/* ═══════════════════════════════════
              SECTION 4: SYSTEM ARCHITECTURE
          ═══════════════════════════════════ */}
          <section className="mb-24">
            <SectionHeader
              number="04"
              icon={Network}
              title="Production System Architecture"
              subtitle="End-to-end request flow from user to database"
            />

            <GlossyCard glow="blue">
              <div className="p-8">
                <div className="flex flex-col items-center gap-2">
                  {/* Layer: Users */}
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/15 font-medium mb-2">
                    End Users
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <ArchNode icon={Monitor} title="Web App" subtitle="Admins · Managers" />
                    <ArchNode icon={Smartphone} title="Mobile App" subtitle="Workers · Drivers" />
                    <ArchNode icon={Globe} title="External APIs" subtitle="ERP · Partners" />
                  </div>

                  <FlowConnector label="HTTPS / TLS 1.3" />

                  {/* Layer: Edge */}
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/15 font-medium mb-2">
                    Edge & Security
                  </p>
                  <div className="flex items-center gap-4">
                    <ArchNode icon={Shield} title="CloudFlare" subtitle="CDN · WAF · DDoS" />
                    <div className="w-8 h-px bg-white/10" />
                    <ArchNode icon={Zap} title="AWS ALB" subtitle="Load Balancer" />
                  </div>

                  <FlowConnector label="Routes Traffic" />

                  {/* Layer: Gateway */}
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/15 font-medium mb-2">
                    API Gateway
                  </p>
                  <ArchNode
                    icon={Settings}
                    title="API Gateway"
                    subtitle="Rate Limit · Auth · Routing · Logs"
                    size="lg"
                  />

                  <FlowConnector label="Authenticated Requests" />

                  {/* Layer: Services */}
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/15 font-medium mb-2">
                    Application Services — Kubernetes
                  </p>
                  <div className="w-full p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                    <p className="text-[9px] text-center text-white/15 mb-4 tracking-widest uppercase">
                      EKS Cluster — Auto-scaling Pods
                    </p>
                    <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2">
                      {[
                        { icon: KeyRound, title: "Auth", sub: "×3" },
                        { icon: Warehouse, title: "Warehouse", sub: "×3" },
                        { icon: Package, title: "Inventory", sub: "×5" },
                        { icon: ClipboardList, title: "Orders", sub: "×5" },
                        { icon: Truck, title: "Fleet", sub: "×3" },
                        { icon: Users, title: "HRM", sub: "×3" },
                        { icon: BarChart3, title: "Reports", sub: "×3" },
                        { icon: CreditCard, title: "Billing", sub: "×2" },
                        { icon: Bell, title: "Notify", sub: "×2" },
                        { icon: Eye, title: "Audit", sub: "×2" },
                        { icon: Download, title: "Receive", sub: "×2" },
                        { icon: Rocket, title: "Ship", sub: "×2" },
                        { icon: ScanLine, title: "IoT", sub: "×2" },
                        { icon: GitBranch, title: "Integrate", sub: "×2" },
                      ].map((svc, i) => (
                        <ArchNode
                          key={i}
                          icon={svc.icon}
                          title={svc.title}
                          subtitle={svc.sub}
                          size="sm"
                        />
                      ))}
                    </div>
                  </div>

                  <FlowConnector label="Read / Write" />

                  {/* Layer: Data */}
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/15 font-medium mb-2">
                    Data & Messaging Layer
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <ArchNode icon={Database} title="PostgreSQL" subtitle="Primary — Multi-AZ" size="lg" />
                    <ArchNode icon={Zap} title="Redis" subtitle="Cache · Queue · Pub/Sub" />
                    <ArchNode icon={Database} title="MongoDB" subtitle="IoT · Logs" />
                    <ArchNode icon={Search} title="Elasticsearch" subtitle="Search · Analytics" />
                    <ArchNode icon={HardDrive} title="AWS S3" subtitle="Files · Backups" />
                  </div>
                </div>
              </div>
            </GlossyCard>
          </section>

          {/* ═══════════════════════════════════
              SECTION 5: DATABASE SCHEMA
          ═══════════════════════════════════ */}
          <section className="mb-24">
            <SectionHeader
              number="05"
              icon={Database}
              title="Database Design"
              subtitle="100+ tables — key schemas for each module"
            />

            <Tabs defaultValue="warehouse-db" className="w-full">
              <TabsList className="bg-white/[0.03] border border-white/[0.06] p-1 flex flex-wrap h-auto gap-1 rounded-xl">
                {[
                  { value: "warehouse-db", label: "Warehouse" },
                  { value: "inventory-db", label: "Inventory" },
                  { value: "order-db", label: "Orders" },
                  { value: "fleet-db", label: "Fleet" },
                  { value: "employee-db", label: "Employees" },
                  { value: "audit-db", label: "Audit" },
                ].map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="data-[state=active]:bg-white/[0.08] data-[state=active]:text-white/70 text-white/30 text-xs rounded-lg"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="warehouse-db" className="mt-4">
                <GlossyCard>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-1">
                      <Database className="w-4 h-4 text-white/30" />
                      <span className="font-mono text-sm font-semibold text-white/60">
                        warehouses
                      </span>
                    </div>
                    <p className="text-xs text-white/25 mb-5">
                      Core table — all 400 warehouse records
                    </p>
                    <ScrollArea className="w-full">
                      <Table>
                        <TableHeader>
                          <TableRow className="border-white/[0.06] hover:bg-transparent">
                            <TableHead className="text-white/30 text-[10px] uppercase tracking-wider">Column</TableHead>
                            <TableHead className="text-white/30 text-[10px] uppercase tracking-wider">Type</TableHead>
                            <TableHead className="text-white/30 text-[10px] uppercase tracking-wider">Constraint</TableHead>
                            <TableHead className="text-white/30 text-[10px] uppercase tracking-wider">Description</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {[
                            ["id", "UUID", "PK DEFAULT gen_random_uuid()", "Primary key"],
                            ["warehouse_code", "VARCHAR(20)", "UNIQUE NOT NULL", "e.g. WH-001"],
                            ["name", "VARCHAR(255)", "NOT NULL", "Warehouse name"],
                            ["type", "VARCHAR(50)", "—", "COLD_STORAGE, DRY, HAZMAT"],
                            ["city, state, country", "VARCHAR", "—", "Address fields"],
                            ["latitude", "DECIMAL(10,8)", "—", "GPS latitude"],
                            ["longitude", "DECIMAL(11,8)", "—", "GPS longitude"],
                            ["total_area_sqft", "DECIMAL(12,2)", "—", "Total area"],
                            ["capacity_units", "INTEGER", "—", "Max storage units"],
                            ["manager_id", "UUID", "FK → employees", "Warehouse manager"],
                            ["status", "VARCHAR(20)", "DEFAULT 'ACTIVE'", "ACTIVE / INACTIVE"],
                            ["created_at", "TIMESTAMP", "DEFAULT NOW()", "Created timestamp"],
                          ].map(([col, type, con, desc], i) => (
                            <TableRow key={i} className="border-white/[0.04] hover:bg-white/[0.02]">
                              <TableCell className="font-mono text-xs text-white/50">{col}</TableCell>
                              <TableCell className="font-mono text-[11px] text-blue-400/50">{type}</TableCell>
                              <TableCell className="text-[11px] text-white/20">{con}</TableCell>
                              <TableCell className="text-[11px] text-white/25">{desc}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </ScrollArea>
                  </div>
                </GlossyCard>
              </TabsContent>

              <TabsContent value="inventory-db" className="mt-4">
                <GlossyCard>
                  <div className="p-6 space-y-6">
                    {[
                      {
                        table: "products",
                        fields: [
                          "id UUID PK | sku VARCHAR UNIQUE | name | category_id FK",
                          "unit_of_measure — EACH, BOX, PALLET, KG",
                          "weight_kg, length, width, height DECIMAL",
                          "unit_cost, selling_price DECIMAL(15,2)",
                          "min_stock_level, max_stock_level, reorder_point INTEGER",
                          "is_hazardous, is_perishable BOOLEAN | shelf_life_days",
                          "barcode, qr_code VARCHAR | image_urls JSONB",
                        ],
                      },
                      {
                        table: "inventory",
                        fields: [
                          "id UUID PK | warehouse_id FK | product_id FK | location_id FK",
                          "lot_number, batch_number, serial_number VARCHAR",
                          "quantity INTEGER | reserved_qty | available_qty GENERATED",
                          "expiry_date DATE | condition — GOOD, DAMAGED, EXPIRED",
                          "UNIQUE(warehouse_id, product_id, location_id, lot_number)",
                        ],
                      },
                      {
                        table: "inventory_transactions",
                        fields: [
                          "type — RECEIVE, SHIP, TRANSFER, ADJUST, PICK, RETURN",
                          "quantity INTEGER | from_location FK | to_location FK",
                          "reference_type — ORDER, TRANSFER, ADJUSTMENT",
                          "performed_by FK → employees | performed_at TIMESTAMP",
                        ],
                      },
                    ].map((schema, i) => (
                      <div key={i}>
                        <div className="flex items-center gap-2 mb-2">
                          <Database className="w-3 h-3 text-emerald-400/40" />
                          <span className="font-mono text-xs font-semibold text-white/50">
                            {schema.table}
                          </span>
                        </div>
                        <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-4 font-mono text-[11px] text-white/30 space-y-1">
                          {schema.fields.map((f, j) => (
                            <div key={j}>{f}</div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </GlossyCard>
              </TabsContent>

              <TabsContent value="order-db" className="mt-4">
                <GlossyCard>
                  <div className="p-6 space-y-6">
                    {[
                      {
                        table: "orders",
                        fields: [
                          "order_number VARCHAR UNIQUE — ORD-2024-000001",
                          "order_type — INBOUND, OUTBOUND, TRANSFER",
                          "warehouse_id FK | customer_id FK | supplier_id FK",
                          "status — 10-state machine (PENDING → DELIVERED)",
                          "priority — LOW, NORMAL, HIGH, URGENT",
                          "subtotal, tax, shipping, discount, total DECIMAL",
                          "shipping_address JSONB | assigned_to FK",
                        ],
                      },
                      {
                        table: "order_items",
                        fields: [
                          "order_id FK | product_id FK",
                          "quantity_ordered, quantity_picked, quantity_shipped",
                          "unit_price, total_price DECIMAL | location_id FK",
                        ],
                      },
                    ].map((s, i) => (
                      <div key={i}>
                        <div className="flex items-center gap-2 mb-2">
                          <Database className="w-3 h-3 text-purple-400/40" />
                          <span className="font-mono text-xs font-semibold text-white/50">{s.table}</span>
                        </div>
                        <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-4 font-mono text-[11px] text-white/30 space-y-1">
                          {s.fields.map((f, j) => <div key={j}>{f}</div>)}
                        </div>
                      </div>
                    ))}

                    {/* Order State Machine */}
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-medium mb-3">
                        Order State Machine
                      </p>
                      <div className="flex flex-wrap items-center gap-2">
                        {["PENDING", "CONFIRMED", "PICKING", "PICKED", "PACKING", "PACKED", "LOADING", "SHIPPED", "DELIVERED"].map(
                          (s, i) => (
                            <React.Fragment key={i}>
                              <Badge
                                variant="outline"
                                className="text-[9px] font-mono border-white/[0.08] text-white/30 bg-white/[0.02]"
                              >
                                {s}
                              </Badge>
                              {i < 8 && <ArrowRight className="w-3 h-3 text-white/10" />}
                            </React.Fragment>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </GlossyCard>
              </TabsContent>

              <TabsContent value="fleet-db" className="mt-4">
                <GlossyCard>
                  <div className="p-6 space-y-6">
                    {[
                      {
                        table: "vehicles",
                        fields: [
                          "vehicle_number UNIQUE | license_plate UNIQUE",
                          "type — TRUCK, VAN, TRAILER, REFRIGERATED",
                          "capacity_kg, capacity_cbm DECIMAL",
                          "gps_device_id | current_lat, current_lng, current_speed",
                          "assigned_warehouse FK | assigned_driver FK",
                          "status — AVAILABLE, IN_TRANSIT, MAINTENANCE",
                        ],
                      },
                      {
                        table: "trips",
                        fields: [
                          "trip_number UNIQUE | vehicle_id FK | driver_id FK",
                          "origin_warehouse FK | destination JSONB",
                          "planned_departure, actual_departure TIMESTAMP",
                          "distance_km, fuel_consumed DECIMAL | route_polyline TEXT",
                        ],
                      },
                    ].map((s, i) => (
                      <div key={i}>
                        <div className="flex items-center gap-2 mb-2">
                          <Database className="w-3 h-3 text-amber-400/40" />
                          <span className="font-mono text-xs font-semibold text-white/50">{s.table}</span>
                        </div>
                        <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-4 font-mono text-[11px] text-white/30 space-y-1">
                          {s.fields.map((f, j) => <div key={j}>{f}</div>)}
                        </div>
                      </div>
                    ))}
                  </div>
                </GlossyCard>
              </TabsContent>

              <TabsContent value="employee-db" className="mt-4">
                <GlossyCard>
                  <div className="p-6 space-y-6">
                    {[
                      {
                        table: "employees",
                        fields: [
                          "employee_code UNIQUE | first_name, last_name, email UNIQUE",
                          "department, designation, role VARCHAR",
                          "warehouse_id FK | manager_id FK (self-referencing)",
                          "salary DECIMAL | hourly_rate | shift — MORNING, AFTERNOON, NIGHT",
                          "skills JSONB — [\"FORKLIFT\", \"HAZMAT\", \"COLD_STORAGE\"]",
                        ],
                      },
                      {
                        table: "attendance",
                        fields: [
                          "employee_id FK | date DATE | clock_in, clock_out TIMESTAMP",
                          "hours_worked, overtime_hours DECIMAL",
                          "status — PRESENT, ABSENT, LATE, LEAVE",
                          "UNIQUE(employee_id, date)",
                        ],
                      },
                    ].map((s, i) => (
                      <div key={i}>
                        <div className="flex items-center gap-2 mb-2">
                          <Database className="w-3 h-3 text-cyan-400/40" />
                          <span className="font-mono text-xs font-semibold text-white/50">{s.table}</span>
                        </div>
                        <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-4 font-mono text-[11px] text-white/30 space-y-1">
                          {s.fields.map((f, j) => <div key={j}>{f}</div>)}
                        </div>
                      </div>
                    ))}

                    {/* RBAC */}
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-medium mb-3">
                        Role Hierarchy (7 Levels)
                      </p>
                      <div className="space-y-1.5">
                        {[
                          { role: "SUPER_ADMIN", access: "System-wide — all warehouses, all features" },
                          { role: "ADMIN", access: "Regional access — multiple warehouses" },
                          { role: "WAREHOUSE_MANAGER", access: "Single warehouse — full control" },
                          { role: "SUPERVISOR", access: "Zone-level access within warehouse" },
                          { role: "OPERATOR", access: "Task-level — pick, pack, receive" },
                          { role: "DRIVER", access: "Fleet mobile app only — trips, delivery" },
                          { role: "VIEWER", access: "Read-only dashboard access" },
                        ].map((r, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 py-1.5 px-3 rounded-lg bg-white/[0.02] border border-white/[0.04]"
                          >
                            <Badge
                              variant="outline"
                              className="font-mono text-[9px] border-white/[0.06] text-white/30 bg-transparent min-w-[140px] justify-center"
                            >
                              {r.role}
                            </Badge>
                            <span className="text-[11px] text-white/25">{r.access}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlossyCard>
              </TabsContent>

              <TabsContent value="audit-db" className="mt-4">
                <GlossyCard glow="red">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Database className="w-3 h-3 text-red-400/40" />
                      <span className="font-mono text-xs font-semibold text-white/50">
                        audit_logs
                      </span>
                    </div>
                    <p className="text-xs text-white/25 mb-4">
                      Every single action in the system — billions of rows, partitioned by month
                    </p>
                    <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-4 font-mono text-[11px] text-white/30 space-y-1">
                      <div>user_id UUID — who performed it</div>
                      <div>action VARCHAR — CREATE, UPDATE, DELETE, LOGIN, EXPORT</div>
                      <div>entity_type — WAREHOUSE, INVENTORY, ORDER, etc.</div>
                      <div>entity_id UUID — which record</div>
                      <div>old_values JSONB — previous state</div>
                      <div>new_values JSONB — new state</div>
                      <div>ip_address INET | user_agent TEXT</div>
                      <div>warehouse_id UUID | timestamp DEFAULT NOW()</div>
                    </div>
                    <div className="mt-4 p-3 rounded-xl bg-red-500/[0.03] border border-red-500/[0.08]">
                      <p className="text-[11px] text-red-400/40 font-medium">
                        ⚠ Critical for compliance — every inventory change, order
                        modification, and login attempt is tracked. Partitioned by month,
                        archived to S3 after 2 years.
                      </p>
                    </div>
                  </div>
                </GlossyCard>
              </TabsContent>
            </Tabs>
          </section>

          {/* ═══════════════════════════════════
              SECTION 6: SECURITY
          ═══════════════════════════════════ */}
          <section className="mb-24">
            <SectionHeader
              number="06"
              icon={Shield}
              title="Security Architecture"
              subtitle="4 layers of defense for billion-dollar operations"
            />

            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  layer: "Layer 1 — Network",
                  icon: Globe,
                  items: [
                    "CloudFlare WAF blocking malicious requests",
                    "DDoS Protection at edge",
                    "VPC with Private Subnets — no direct exposure",
                    "Security Groups & NACLs",
                    "VPN required for admin access",
                  ],
                },
                {
                  layer: "Layer 2 — Application",
                  icon: Lock,
                  items: [
                    "JWT + Refresh Tokens (15 min / 7 day)",
                    "7-level RBAC with warehouse isolation",
                    "2FA for admin accounts",
                    "Rate Limiting — 100 req/min per user",
                    "Zod validation on every endpoint",
                    "SQL injection, XSS, CSRF prevention",
                  ],
                },
                {
                  layer: "Layer 3 — Data",
                  icon: HardDrive,
                  items: [
                    "AES-256 encryption at rest (RDS)",
                    "TLS 1.3 encryption in transit",
                    "PII data masking in logs",
                    "AWS Secrets Manager (no hardcoded keys)",
                    "Automated daily backups + cross-region replication",
                  ],
                },
                {
                  layer: "Layer 4 — Audit",
                  icon: Eye,
                  items: [
                    "Complete audit trail on every action",
                    "IP + User Agent logging",
                    "Concurrent session limits",
                    "Auto-archive after 2 years",
                    "GDPR & SOC2 compliance ready",
                  ],
                },
              ].map((layer, i) => {
                const IconComp = layer.icon;
                return (
                  <GlossyCard key={i}>
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                          <IconComp size={15} className="text-white/40" />
                        </div>
                        <span className="font-semibold text-sm text-white/60">
                          {layer.layer}
                        </span>
                      </div>
                      <div className="space-y-2">
                        {layer.items.map((item, j) => (
                          <div key={j} className="flex items-start gap-2.5 text-xs text-white/35">
                            <Shield className="w-3 h-3 mt-0.5 shrink-0 text-emerald-400/30" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </GlossyCard>
                );
              })}
            </div>
          </section>

          {/* ═══════════════════════════════════
              SECTION 7: INFRASTRUCTURE & SCALING
          ═══════════════════════════════════ */}
          <section className="mb-24">
            <SectionHeader
              number="07"
              icon={Cloud}
              title="Infrastructure & Scaling"
              subtitle="AWS layout and auto-scaling for 400 warehouses"
            />

            {/* AWS Layout */}
            <GlossyCard className="mb-6" glow="purple">
              <div className="p-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/15 font-medium mb-5">
                  AWS VPC Network Layout
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    {
                      title: "Public Subnet",
                      items: [
                        { icon: Zap, text: "Application Load Balancer" },
                        { icon: Globe, text: "NAT Gateway" },
                        { icon: Terminal, text: "Bastion Host (SSH)" },
                      ],
                    },
                    {
                      title: "Private Subnet — App",
                      items: [
                        { icon: Cpu, text: "EKS Cluster (Kubernetes)" },
                        { icon: Server, text: "Node Group 1 — 3× t3.large" },
                        { icon: Server, text: "Node Group 2 — 3× t3.large" },
                        { icon: TrendingUp, text: "Auto-Scale: min 3 → max 10" },
                      ],
                    },
                    {
                      title: "Private Subnet — Data",
                      items: [
                        { icon: Database, text: "RDS PostgreSQL (Multi-AZ)" },
                        { icon: Zap, text: "ElastiCache Redis Cluster" },
                        { icon: Search, text: "OpenSearch (Elasticsearch)" },
                        { icon: Database, text: "DocumentDB (MongoDB)" },
                      ],
                    },
                  ].map((subnet, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]"
                    >
                      <p className="text-[10px] uppercase tracking-[0.15em] text-white/25 font-semibold mb-3">
                        {subnet.title}
                      </p>
                      <div className="space-y-2">
                        {subnet.items.map((item, j) => {
                          const IconComp = item.icon;
                          return (
                            <div
                              key={j}
                              className="flex items-center gap-2 text-xs text-white/35 p-2 rounded-lg bg-white/[0.02] border border-white/[0.03]"
                            >
                              <IconComp className="w-3 h-3 shrink-0" />
                              {item.text}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GlossyCard>

            {/* Scaling Strategy */}
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "Database Scaling",
                  items: [
                    "3× Read Replicas for reporting queries",
                    "PgBouncer Connection Pooling (1000 max)",
                    "Table Partitioning by warehouse_id",
                    "Archive old data → S3 / Glacier",
                    "All FKs + search fields indexed",
                  ],
                },
                {
                  title: "Application Scaling",
                  items: [
                    "Kubernetes HPA — auto-scale on CPU/Memory",
                    "Min: 3 pods, Max: 20 pods per service",
                    "Trigger: CPU > 70% or Memory > 75%",
                    "Stateless — all state in DB/Redis",
                    "Load balancer distributes evenly",
                  ],
                },
                {
                  title: "Caching Strategy",
                  items: [
                    "Warehouse config → Redis (TTL: 1hr)",
                    "Product catalog → Redis (TTL: 30min)",
                    "User sessions → Redis (TTL: 24hr)",
                    "Dashboard metrics → Redis (TTL: 5min)",
                    "Cache invalidation on writes (pub/sub)",
                  ],
                },
                {
                  title: "Async Processing",
                  items: [
                    "Report generation → Bull background job",
                    "Email/SMS → Message queue",
                    "GPS ingestion → Stream processing",
                    "Inventory sync → Cron jobs",
                    "Audit logging → Async MongoDB write",
                  ],
                },
              ].map((sec, i) => (
                <GlossyCard key={i}>
                  <div className="p-5">
                    <p className="text-xs font-semibold text-white/50 mb-3">
                      {sec.title}
                    </p>
                    <div className="space-y-2">
                      {sec.items.map((item, j) => (
                        <div key={j} className="flex items-start gap-2 text-xs text-white/30">
                          <CheckCircle2 className="w-3 h-3 mt-0.5 shrink-0 text-emerald-400/30" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </GlossyCard>
              ))}
            </div>
          </section>

          {/* ═══════════════════════════════════
              SECTION 8: REAL-TIME & MONITORING
          ═══════════════════════════════════ */}
          <section className="mb-24">
            <SectionHeader
              number="08"
              icon={Radio}
              title="Real-Time & Monitoring"
              subtitle="WebSocket channels and observability stack"
            />

            <div className="grid md:grid-cols-2 gap-4">
              {/* WebSocket */}
              <GlossyCard glow="green">
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-5">
                    <Wifi size={14} className="text-emerald-400/40" />
                    <span className="text-xs font-semibold text-white/40 tracking-wide uppercase">
                      Real-Time WebSocket Channels
                    </span>
                  </div>
                  <div className="space-y-2.5">
                    {[
                      { ch: "fleet:tracking", desc: "GPS truck locations", freq: "~10s" },
                      { ch: "warehouse:{id}:inventory", desc: "Stock level changes", freq: "On change" },
                      { ch: "warehouse:{id}:orders", desc: "Order status updates", freq: "On change" },
                      { ch: "alerts:{wh_id}", desc: "Low stock, expiry alerts", freq: "On trigger" },
                      { ch: "tasks:{emp_id}", desc: "New task assignments", freq: "On assign" },
                      { ch: "dashboard:kpi", desc: "Live KPI metrics", freq: "~30s" },
                      { ch: "user:{id}:notifications", desc: "Bell notifications", freq: "On event" },
                    ].map((c, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]"
                      >
                        <Circle className="w-2 h-2 shrink-0 text-emerald-400/50 fill-emerald-400/30" />
                        <div className="flex-1 min-w-0">
                          <span className="font-mono text-[11px] text-white/40 block truncate">
                            {c.ch}
                          </span>
                          <span className="text-[10px] text-white/20">{c.desc}</span>
                        </div>
                        <Badge
                          variant="outline"
                          className="text-[9px] border-white/[0.06] text-white/20 bg-transparent shrink-0"
                        >
                          {c.freq}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </GlossyCard>

              {/* Monitoring */}
              <GlossyCard>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-5">
                    <Activity size={14} className="text-white/30" />
                    <span className="text-xs font-semibold text-white/40 tracking-wide uppercase">
                      Monitoring Stack
                    </span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { tool: "Prometheus + Grafana", metrics: ["CPU, Memory, Request Rate", "Response Time P95 < 200ms", "Error Rate < 0.1%"] },
                      { tool: "ELK Stack", metrics: ["Centralized app logs", "Search & filter", "Anomaly detection"] },
                      { tool: "Sentry", metrics: ["Exception tracking", "Stack traces", "User impact"] },
                      { tool: "CloudWatch", metrics: ["AWS resource health", "Billing alerts", "Auto-scaling"] },
                    ].map((m, i) => (
                      <div key={i} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                        <p className="text-xs font-semibold text-white/40 mb-1.5">{m.tool}</p>
                        {m.metrics.map((met, j) => (
                          <div key={j} className="text-[11px] text-white/20 flex items-center gap-1.5 py-0.5">
                            <CircleDot className="w-2 h-2 shrink-0" /> {met}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </GlossyCard>
            </div>
          </section>

          {/* ═══════════════════════════════════
              SECTION 9: BUDGET BREAKDOWN
          ═══════════════════════════════════ */}
          <section className="mb-24">
            <SectionHeader
              number="09"
              icon={DollarSign}
              title="Budget Breakdown"
              subtitle="$200,000 allocated across 4 phases"
            />

            {/* Budget Cards */}
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              {[
                { phase: "Development", amount: "$120,000", pct: 60, desc: "Team salaries — 6-8 months" },
                { phase: "Infrastructure", amount: "$40,000", pct: 20, desc: "AWS cloud — Year 1" },
                { phase: "Third-Party", amount: "$20,000", pct: 10, desc: "APIs, tools, licenses" },
                { phase: "Contingency", amount: "$20,000", pct: 10, desc: "Buffer for unexpected" },
              ].map((b, i) => (
                <GlossyCard key={i}>
                  <div className="p-5">
                    <p className="text-[10px] text-white/20 uppercase tracking-[0.15em] font-medium">
                      {b.phase}
                    </p>
                    <p className="text-2xl font-bold text-white/80 mt-1 tracking-tight">
                      {b.amount}
                    </p>
                    <p className="text-[11px] text-white/20 mt-1">{b.desc}</p>
                    <div className="mt-3 h-1.5 rounded-full bg-white/[0.04] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-white/20 to-white/10"
                        style={{ width: `${b.pct}%` }}
                      />
                    </div>
                    <p className="text-[9px] text-white/15 mt-1.5">{b.pct}% of budget</p>
                  </div>
                </GlossyCard>
              ))}
            </div>

            {/* Team Table */}
            <GlossyCard className="mb-6">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-5">
                  <Users size={14} className="text-white/30" />
                  <span className="text-xs font-semibold text-white/40 tracking-wide uppercase">
                    Development Team — $120,000 / 6-8 Months
                  </span>
                </div>
                <ScrollArea className="w-full">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-white/[0.04] hover:bg-transparent">
                        <TableHead className="text-white/25 text-[10px] uppercase tracking-wider">Role</TableHead>
                        <TableHead className="text-white/25 text-[10px] uppercase tracking-wider">Count</TableHead>
                        <TableHead className="text-white/25 text-[10px] uppercase tracking-wider">Duration</TableHead>
                        <TableHead className="text-white/25 text-[10px] uppercase tracking-wider">Cost</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        ["Tech Lead / Architect", "1", "8 months", "$25,000"],
                        ["Sr. Backend Developer", "2", "8 months", "$30,000"],
                        ["Sr. Frontend Developer", "2", "7 months", "$25,000"],
                        ["Mobile Developer", "1", "4 months", "$12,000"],
                        ["DevOps Engineer", "1 (PT)", "6 months", "$8,000"],
                        ["QA Engineer", "1", "5 months", "$10,000"],
                        ["UI/UX Designer", "1 (PT)", "3 months", "$6,000"],
                        ["Project Manager", "1 (PT)", "8 months", "$4,000"],
                      ].map((row, i) => (
                        <TableRow key={i} className="border-white/[0.03] hover:bg-white/[0.02]">
                          <TableCell className="text-xs text-white/50 font-medium">{row[0]}</TableCell>
                          <TableCell className="text-xs text-white/30">{row[1]}</TableCell>
                          <TableCell className="text-xs text-white/30">{row[2]}</TableCell>
                          <TableCell className="text-xs text-white/50 font-semibold font-mono">{row[3]}</TableCell>
                        </TableRow>
                      ))}
                      <TableRow className="border-white/[0.06] bg-white/[0.02]">
                        <TableCell className="text-xs text-white/60 font-bold">TOTAL</TableCell>
                        <TableCell className="text-xs text-white/40">8-10</TableCell>
                        <TableCell />
                        <TableCell className="text-xs text-white/70 font-bold font-mono">$120,000</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </ScrollArea>
              </div>
            </GlossyCard>

            {/* Monthly Infra */}
            <GlossyCard>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-5">
                  <Cloud size={14} className="text-white/30" />
                  <span className="text-xs font-semibold text-white/40 tracking-wide uppercase">
                    Monthly Infrastructure — ~$3,200/mo
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-x-8">
                  {[
                    ["AWS EKS Cluster", "$800"],
                    ["EC2 Instances (6× t3.large)", "$600"],
                    ["RDS PostgreSQL (Multi-AZ)", "$500"],
                    ["ElastiCache Redis", "$200"],
                    ["OpenSearch", "$300"],
                    ["S3 + CloudFront", "$100"],
                    ["ALB + Data Transfer", "$150"],
                    ["CloudWatch", "$100"],
                    ["Route53 + ACM + SES", "$120"],
                    ["Backup + Misc", "$330"],
                  ].map(([svc, cost], i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-2.5 border-b border-white/[0.03] last:border-0 text-xs"
                    >
                      <span className="text-white/30">{svc}</span>
                      <span className="font-mono text-white/40 font-medium">{cost}/mo</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 mt-2 border-t border-white/[0.06]">
                  <span className="text-sm font-semibold text-white/50">Annual Total</span>
                  <span className="text-sm font-bold text-white/70 font-mono">~$38,400/yr</span>
                </div>
              </div>
            </GlossyCard>
          </section>

          {/* ═══════════════════════════════════
              SECTION 10: TIMELINE
          ═══════════════════════════════════ */}
          <section className="mb-24">
            <SectionHeader
              number="10"
              icon={Calendar}
              title="Development Timeline"
              subtitle="8-month delivery plan with phased rollout"
            />

            <div className="space-y-3">
              {[
                {
                  month: "Month 1", title: "Foundation & Setup", pct: 12.5,
                  items: ["Architecture, DB schema, CI/CD pipeline", "Auth — login, JWT, RBAC, 2FA", "User & Role management", "Dashboard skeleton UI"],
                  output: "Working login + RBAC + empty dashboard",
                },
                {
                  month: "Month 2", title: "Warehouse & Inventory", pct: 25,
                  items: ["Warehouse CRUD for 400 locations", "Zone & Location management", "Product catalog (SKU)", "Basic inventory management"],
                  output: "Manage warehouses & view inventory",
                },
                {
                  month: "Month 3", title: "Orders & Operations", pct: 37.5,
                  items: ["Order lifecycle with state machine", "Receiving & Putaway workflow", "Pick / Pack / Ship flow", "Inter-warehouse transfers"],
                  output: "Complete order flow",
                },
                {
                  month: "Month 4", title: "Fleet & Employees", pct: 50,
                  items: ["Vehicle registry + GPS tracking", "Trip management & routing", "Employee directory + attendance", "Task assignment system"],
                  output: "🎯 MVP — Deploy pilot (10-20 warehouses)",
                },
                {
                  month: "Month 5", title: "Reports & Billing", pct: 62.5,
                  items: ["Executive + warehouse dashboards", "Reports with PDF/Excel export", "Billing & invoicing module", "Notification system (email + push)"],
                  output: "Full reporting suite",
                },
                {
                  month: "Month 6", title: "Mobile & Real-Time", pct: 75,
                  items: ["React Native — driver app", "React Native — worker app", "Barcode scanning via camera", "WebSocket live updates"],
                  output: "Mobile apps + real-time features",
                },
                {
                  month: "Month 7", title: "Testing & Hardening", pct: 87.5,
                  items: ["Load testing (400 warehouse sim)", "Security audit & pen testing", "Performance optimization", "UAT with client + bug fixes"],
                  output: "Production-ready system",
                },
                {
                  month: "Month 8", title: "Launch", pct: 100,
                  items: ["Staging deployment + final QA", "Production deploy — 10 warehouses", "Gradual rollout → 50 → 200 → 400", "Documentation & handover"],
                  output: "🚀 LIVE — All 400 warehouses",
                },
              ].map((m, i) => (
                <GlossyCard key={i} className="group">
                  <div className="p-5 flex flex-col md:flex-row md:items-start gap-5">
                    <div className="md:w-44 shrink-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Badge
                          variant="outline"
                          className="border-white/[0.08] text-white/30 bg-white/[0.03] text-[10px] font-mono"
                        >
                          {m.month}
                        </Badge>
                      </div>
                      <p className="text-sm font-semibold text-white/60 mb-2">
                        {m.title}
                      </p>
                      <div className="h-1 rounded-full bg-white/[0.04] overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-white/25 to-white/10 transition-all"
                          style={{ width: `${m.pct}%` }}
                        />
                      </div>
                      <p className="text-[9px] text-white/15 mt-1">{m.pct}%</p>
                    </div>
                    <div className="flex-1">
                      <div className="space-y-1.5 mb-3">
                        {m.items.map((item, j) => (
                          <div key={j} className="flex items-start gap-2 text-[13px] text-white/35">
                            <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0 text-emerald-400/40" />
                            {item}
                          </div>
                        ))}
                      </div>
                      <div className="px-3 py-2 rounded-lg bg-white/[0.02] border border-white/[0.04] inline-block">
                        <span className="text-[11px] text-white/25">
                          📦 <span className="text-white/40 font-medium">{m.output}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </GlossyCard>
              ))}
            </div>
          </section>

          {/* ═══════════════════════════════════
              SECTION 11: KEY DECISIONS
          ═══════════════════════════════════ */}
          <section className="mb-24">
            <SectionHeader
              number="11"
              icon={Lightbulb}
              title="Key Decisions & Trade-offs"
              subtitle="Critical choices to stay within $200K"
            />

            <div className="grid md:grid-cols-2 gap-4">
              {/* DO */}
              <GlossyCard glow="green">
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-5">
                    <CheckCircle2 size={14} className="text-emerald-400/50" />
                    <span className="text-xs font-semibold text-emerald-400/40 tracking-wide uppercase">
                      Smart Decisions
                    </span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { d: "Start as MODULAR MONOLITH", r: "Saves ~$40K and 2+ months. Split later when load demands." },
                      { d: "100% open-source stack", r: "Zero license costs. PostgreSQL, Redis, NestJS — all free." },
                      { d: "Remote team from cost-effective regions", r: "Same project with US team = $800K+. Remote = $200K achievable." },
                      { d: "Managed services (RDS, ElastiCache)", r: "Less DevOps. AWS handles patches, backups, failover." },
                      { d: "Pre-built UI components (ShadCN)", r: "Don't build from scratch. Proven, accessible, beautiful." },
                      { d: "MVP first → iterate", r: "Deploy core in Month 4. Get real feedback. Improve." },
                    ].map((item, i) => (
                      <div key={i} className="p-3 rounded-xl bg-emerald-400/[0.02] border border-emerald-400/[0.06]">
                        <p className="text-xs font-semibold text-white/50">{item.d}</p>
                        <p className="text-[11px] text-white/20 mt-1">{item.r}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </GlossyCard>

              {/* DON'T */}
              <GlossyCard glow="red">
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-5">
                    <AlertTriangle size={14} className="text-red-400/50" />
                    <span className="text-xs font-semibold text-red-400/40 tracking-wide uppercase">
                      Avoid These Mistakes
                    </span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { d: "Don't start with microservices", r: "Too complex + expensive. Service mesh, tracing — adds $50K+ and 3 months." },
                      { d: "Don't build custom auth", r: "Auth is solved. Use NextAuth + JWT. Don't reinvent the wheel." },
                      { d: "Don't build custom charts", r: "Use Recharts / Chart.js. Custom charts waste 2-3 weeks." },
                      { d: "Don't use Kafka initially", r: "Kafka needs dedicated expertise. Bull + Redis handles 99% of cases." },
                      { d: "Don't hire all US developers", r: "US Tech Lead + remote team = perfect balance. All-US = 4× budget." },
                      { d: "Don't build ALL features before launch", r: "Ship 60% → iterate. Perfect is the enemy of done." },
                    ].map((item, i) => (
                      <div key={i} className="p-3 rounded-xl bg-red-400/[0.02] border border-red-400/[0.06]">
                        <p className="text-xs font-semibold text-white/50">{item.d}</p>
                        <p className="text-[11px] text-white/20 mt-1">{item.r}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </GlossyCard>
            </div>

            {/* Evolution Path */}
            <GlossyCard className="mt-4" glow="white">
              <div className="p-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-medium mb-4">
                  Recommended Evolution Path
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { phase: "Phase 1 — Month 1-6", title: "Modular Monolith", desc: "Single NestJS app with clear module boundaries. Fast, simple, cheap." },
                    { phase: "Phase 2 — Month 7-9", title: "Extract High-Load", desc: "Inventory + Orders → separate services when they bottleneck." },
                    { phase: "Phase 3 — Month 10+", title: "Full Microservices", desc: "Only when revenue/load demands. Most companies never need this." },
                  ].map((p, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]"
                    >
                      <Badge
                        variant="outline"
                        className="border-white/[0.08] text-white/25 bg-transparent text-[9px] mb-2"
                      >
                        {p.phase}
                      </Badge>
                      <p className="text-sm font-semibold text-white/50 mb-1">{p.title}</p>
                      <p className="text-[11px] text-white/20">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </GlossyCard>
          </section>

          {/* ═══════════════════════════════════
              FINAL SUMMARY
          ═══════════════════════════════════ */}
          <section className="mb-16">
            <GlossyCard glow="white">
              {/* Top shine */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div className="p-8 md:p-12">
                <div className="text-center mb-10">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-medium mb-3">
                    Project Summary
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-white/80 tracking-tight">
                    Complete Blueprint
                  </h2>
                  <p className="text-sm text-white/25 mt-2 max-w-xl mx-auto">
                    Enterprise Warehouse Management System — everything needed to build,
                    deploy, and scale for 400 warehouses.
                  </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8 mb-10">
                  {[
                    {
                      title: "Scope",
                      icon: Target,
                      items: [
                        ["Warehouses", "400"],
                        ["Core Modules", "14"],
                        ["API Endpoints", "200+"],
                        ["DB Tables", "100+"],
                        ["Pages", "50+"],
                      ],
                    },
                    {
                      title: "Stack",
                      icon: Code2,
                      items: [
                        ["Frontend", "Next.js 14"],
                        ["Backend", "NestJS"],
                        ["Database", "PostgreSQL"],
                        ["Cache", "Redis"],
                        ["Mobile", "React Native"],
                      ],
                    },
                    {
                      title: "Budget",
                      icon: DollarSign,
                      items: [
                        ["Total", "$200,000"],
                        ["Development", "$120K"],
                        ["Infrastructure", "$40K"],
                        ["Team Size", "8-10"],
                        ["Monthly Infra", "~$3,200"],
                      ],
                    },
                    {
                      title: "Timeline",
                      icon: Calendar,
                      items: [
                        ["Duration", "8 Months"],
                        ["MVP Ready", "Month 4"],
                        ["Full Launch", "Month 8"],
                        ["Architecture", "Modular Mono"],
                        ["SLA Uptime", "99.9%"],
                      ],
                    },
                  ].map((col, i) => {
                    const IconComp = col.icon;
                    return (
                      <div key={i}>
                        <div className="flex items-center gap-2 mb-4">
                          <IconComp size={14} className="text-white/25" />
                          <span className="text-[10px] uppercase tracking-[0.2em] text-white/25 font-semibold">
                            {col.title}
                          </span>
                        </div>
                        <div className="space-y-2">
                          {col.items.map(([label, value], j) => (
                            <div key={j} className="flex items-center justify-between text-xs">
                              <span className="text-white/25">{label}</span>
                              <Badge
                                variant="outline"
                                className="border-white/[0.06] text-white/40 bg-white/[0.02] text-[10px] font-mono"
                              >
                                {value}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <Separator className="bg-white/[0.04] my-8" />

                {/* Final Note */}
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400/50 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-white/60 mb-2">
                        Is $200K realistic for this project?
                      </p>
                      <p className="text-xs text-white/30 leading-relaxed">
                        <span className="text-white/60 font-semibold">Yes</span> — if you follow these rules:
                        hire smart remote talent, start with a modular monolith (not microservices),
                        use 100% open-source, phase the delivery (MVP first), and leverage managed cloud services.
                        <span className="block mt-2 text-white/20">
                          For comparison: With a US team this would cost $800K – $1.5M.
                          Smart remote hiring makes $200K absolutely achievable.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tag cloud */}
                <div className="flex flex-wrap justify-center gap-2 mt-8">
                  {[
                    "14 Modules", "200+ APIs", "100+ Tables", "50+ Pages",
                    "4 Security Layers", "Real-Time WebSocket", "Mobile Apps",
                    "GPS Tracking", "Auto-Scaling", "99.9% Uptime",
                  ].map((tag, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="border-white/[0.06] text-white/20 bg-white/[0.02] text-[10px] hover:bg-white/[0.04] hover:text-white/30 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </GlossyCard>
          </section>

          {/* Footer */}
          <div className="text-center py-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/[0.06]" />
              <Hexagon className="w-4 h-4 text-white/10" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/[0.06]" />
            </div>
            <p className="text-[11px] text-white/15">
              WMS Architecture Blueprint — Production Grade
            </p>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}