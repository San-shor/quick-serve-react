import {
  CalendarCheck,
  CircleCheck,
  Clock,
  Shield,
  UserCheck,
  Users,
} from "lucide-react";
import Service from "./service/Service";
import Card from "./ui/Card";

function DashBoard() {
  return (
    <div className="p-4 bg-neutral-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900 mb-1">
            Dashboard Overview
          </h1>
          <p className="text-neutral-600 text-sm">
            Track your business metrics and performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <Card
            title="Total Workers"
            value="456"
            icon={Users}
            iconColor="text-blue-600"
            iconBgColor="bg-blue-50"
            trend="up"
            trendValue="+8%"
            bgColor="bg-gradient-to-br from-blue-25 to-white"
            borderColor="border-blue-100"
          />

          <Card
            title="Total Moderators"
            value="420"
            icon={Shield}
            iconColor="text-purple-600"
            iconBgColor="bg-purple-50"
            trend="up"
            trendValue="+3%"
            bgColor="bg-gradient-to-br from-purple-25 to-white"
            borderColor="border-purple-100"
          />

          <Card
            title="Total Customers"
            value="1,200"
            icon={UserCheck}
            iconColor="text-emerald-600"
            iconBgColor="bg-emerald-50"
            trend="up"
            trendValue="+15%"
            bgColor="bg-gradient-to-br from-emerald-25 to-white"
            borderColor="border-emerald-100"
          />

          <Card
            title="Complete Bookings"
            value="20"
            icon={CalendarCheck}
            iconColor="text-green-600"
            iconBgColor="bg-green-50"
            bgColor="bg-gradient-to-br from-green-25 to-white"
            borderColor="border-green-100"
          >
            <div className="flex items-center gap-2 mt-1">
              <CircleCheck
                className="w-3 h-3 text-green-600"
                strokeWidth={2.5}
              />
              <span className="text-xs text-neutral-600 font-medium">
                All verified
              </span>
            </div>
          </Card>

          <Card
            title="Pending Bookings"
            value="15"
            icon={Clock}
            iconColor="text-amber-600"
            iconBgColor="bg-amber-50"
            bgColor="bg-gradient-to-br from-amber-25 to-white"
            borderColor="border-amber-100"
          >
            <div className="flex items-center gap-2 mt-1">
              <div className="flex-1 h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-500 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>
              <span className="text-xs text-neutral-600 font-medium">60%</span>
            </div>
          </Card>

          <Card
            title="Revenue Today"
            value="$2,450"
            icon={null}
            trend="up"
            trendValue="+12%"
            bgColor="bg-gradient-to-br from-slate-25 to-white"
            borderColor="border-slate-100"
          >
            <div className="mt-1">
              <span className="text-xs text-neutral-500">Target: $3,000</span>
            </div>
          </Card>
        </div>
        <div>
          <Service />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
