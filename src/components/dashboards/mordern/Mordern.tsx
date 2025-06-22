'use client';
import PageContainer from '@/components/container/PageContainer';
import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import Customers from './Customers';
import EmployeeSalary from './EmployeeSalary';
import MonthlyEarnings from './MonthlyEarnings';
import Projects from './Projects';
import RevenueUpdates from './RevenueUpdates';
import Social from './Social';
import TopCards from './TopCards';
import YearlyBreakup from './YearlyBreakup';
import SellingProducts from './SellingProducts';
import WeeklyStats from './WeeklyStats';
import TopPerformers from './TopPerformers';
// components
// import YearlyBreakup from "@/app/(DashboardLayout)/components/dashboards/modern/YearlyBreakup";
// import MonthlyEarnings from "@/app/(DashboardLayout)/components/dashboards/modern/MonthlyEarnings";
// import TopCards from "@/app/(DashboardLayout)/components/dashboards/modern/TopCards";
// import RevenueUpdates from "@/app/(DashboardLayout)/components/dashboards/modern/RevenueUpdates";
// import EmployeeSalary from "@/app/(DashboardLayout)/components/dashboards/modern/EmployeeSalary";
// import Customers from "@/app/(DashboardLayout)/components/dashboards/modern/Customers";
// import Projects from "@/app/(DashboardLayout)/components/dashboards/modern/Projects";
// import Social from "@/app/(DashboardLayout)/components/dashboards/modern/Social";
// import SellingProducts from "@/app/(DashboardLayout)/components/dashboards/modern/SellingProducts";
// import WeeklyStats from "@/app/(DashboardLayout)/components/dashboards/modern/WeeklyStats";
// import TopPerformers from "@/app/(DashboardLayout)/components/dashboards/modern/TopPerformers";
// import Welcome from "@/app/(DashboardLayout)/layout/shared/welcome/Welcome";

export default function Mordern() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <PageContainer title='Dashboard' description='this is Dashboard'>
      <div style={{ marginTop: 24 }}>
        <Row gutter={[24, 24]}>
          {/* Top Cards */}
          <Col span={24}>
            <TopCards />
          </Col>
          <Col span={16}>
            <RevenueUpdates isLoading={isLoading} />
          </Col>
          <Col span={8}>
            <Row gutter={[24, 24]}>
              <Col span={24}>
                <YearlyBreakup isLoading={isLoading} />
              </Col>
              <Col span={24}>
                <MonthlyEarnings isLoading={isLoading} />
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <EmployeeSalary isLoading={isLoading} />
          </Col>
          <Col span={8}>
            <Row gutter={[24, 24]}>
              <Col span={12}>
                <Customers isLoading={isLoading} />
              </Col>
              <Col span={12}>
                <Projects isLoading={isLoading} />
              </Col>
              <Col span={24}>
                <Social />
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <SellingProducts />
          </Col>
          <Col span={8}>
            <WeeklyStats isLoading={isLoading} />
          </Col>
          <Col span={16}>
            <TopPerformers />
          </Col>
        </Row>
      </div>
    </PageContainer>
  );
}
