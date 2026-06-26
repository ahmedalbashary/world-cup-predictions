-- =============================================
-- World Cup 2026 - Seed matches data
-- Run this in Supabase SQL Editor AFTER creating the tables
-- =============================================

INSERT INTO matches (team_a, team_b, team_a_flag, team_b_flag, stage, group_name, match_number, kickoff_time, status) VALUES

-- Group A
('Mexico', 'New Zealand', 'https://flagcdn.com/48x36/mx.png', 'https://flagcdn.com/48x36/nz.png', 'group', 'A', 1, '2026-06-11T20:00:00Z', 'upcoming'),
('Uruguay', 'Zambia', 'https://flagcdn.com/48x36/uy.png', 'https://flagcdn.com/48x36/zm.png', 'group', 'A', 2, '2026-06-12T00:00:00Z', 'upcoming'),
('Mexico', 'Zambia', 'https://flagcdn.com/48x36/mx.png', 'https://flagcdn.com/48x36/zm.png', 'group', 'A', 3, '2026-06-16T00:00:00Z', 'upcoming'),
('New Zealand', 'Uruguay', 'https://flagcdn.com/48x36/nz.png', 'https://flagcdn.com/48x36/uy.png', 'group', 'A', 4, '2026-06-16T20:00:00Z', 'upcoming'),
('Uruguay', 'Mexico', 'https://flagcdn.com/48x36/uy.png', 'https://flagcdn.com/48x36/mx.png', 'group', 'A', 5, '2026-06-20T20:00:00Z', 'upcoming'),
('Zambia', 'New Zealand', 'https://flagcdn.com/48x36/zm.png', 'https://flagcdn.com/48x36/nz.png', 'group', 'A', 6, '2026-06-20T20:00:00Z', 'upcoming'),

-- Group B
('Argentina', 'Albania', 'https://flagcdn.com/48x36/ar.png', 'https://flagcdn.com/48x36/al.png', 'group', 'B', 7, '2026-06-13T00:00:00Z', 'upcoming'),
('Chile', 'Morocco', 'https://flagcdn.com/48x36/cl.png', 'https://flagcdn.com/48x36/ma.png', 'group', 'B', 8, '2026-06-13T20:00:00Z', 'upcoming'),
('Argentina', 'Chile', 'https://flagcdn.com/48x36/ar.png', 'https://flagcdn.com/48x36/cl.png', 'group', 'B', 9, '2026-06-17T20:00:00Z', 'upcoming'),
('Albania', 'Morocco', 'https://flagcdn.com/48x36/al.png', 'https://flagcdn.com/48x36/ma.png', 'group', 'B', 10, '2026-06-18T00:00:00Z', 'upcoming'),
('Morocco', 'Argentina', 'https://flagcdn.com/48x36/ma.png', 'https://flagcdn.com/48x36/ar.png', 'group', 'B', 11, '2026-06-22T00:00:00Z', 'upcoming'),
('Albania', 'Chile', 'https://flagcdn.com/48x36/al.png', 'https://flagcdn.com/48x36/cl.png', 'group', 'B', 12, '2026-06-22T00:00:00Z', 'upcoming'),

-- Group C
('USA', 'Cuba', 'https://flagcdn.com/48x36/us.png', 'https://flagcdn.com/48x36/cu.png', 'group', 'C', 13, '2026-06-12T20:00:00Z', 'upcoming'),
('Panama', 'Senegal', 'https://flagcdn.com/48x36/pa.png', 'https://flagcdn.com/48x36/sn.png', 'group', 'C', 14, '2026-06-13T20:00:00Z', 'upcoming'),
('USA', 'Panama', 'https://flagcdn.com/48x36/us.png', 'https://flagcdn.com/48x36/pa.png', 'group', 'C', 15, '2026-06-18T20:00:00Z', 'upcoming'),
('Cuba', 'Senegal', 'https://flagcdn.com/48x36/cu.png', 'https://flagcdn.com/48x36/sn.png', 'group', 'C', 16, '2026-06-18T20:00:00Z', 'upcoming'),
('Senegal', 'USA', 'https://flagcdn.com/48x36/sn.png', 'https://flagcdn.com/48x36/us.png', 'group', 'C', 17, '2026-06-22T20:00:00Z', 'upcoming'),
('Cuba', 'Panama', 'https://flagcdn.com/48x36/cu.png', 'https://flagcdn.com/48x36/pa.png', 'group', 'C', 18, '2026-06-22T20:00:00Z', 'upcoming'),

-- Group D
('Brazil', 'Egypt', 'https://flagcdn.com/48x36/br.png', 'https://flagcdn.com/48x36/eg.png', 'group', 'D', 19, '2026-06-14T20:00:00Z', 'upcoming'),
('DR Congo', 'Serbia', 'https://flagcdn.com/48x36/cd.png', 'https://flagcdn.com/48x36/rs.png', 'group', 'D', 20, '2026-06-14T20:00:00Z', 'upcoming'),
('Brazil', 'DR Congo', 'https://flagcdn.com/48x36/br.png', 'https://flagcdn.com/48x36/cd.png', 'group', 'D', 21, '2026-06-19T20:00:00Z', 'upcoming'),
('Egypt', 'Serbia', 'https://flagcdn.com/48x36/eg.png', 'https://flagcdn.com/48x36/rs.png', 'group', 'D', 22, '2026-06-19T20:00:00Z', 'upcoming'),
('Serbia', 'Brazil', 'https://flagcdn.com/48x36/rs.png', 'https://flagcdn.com/48x36/br.png', 'group', 'D', 23, '2026-06-23T20:00:00Z', 'upcoming'),
('Egypt', 'DR Congo', 'https://flagcdn.com/48x36/eg.png', 'https://flagcdn.com/48x36/cd.png', 'group', 'D', 24, '2026-06-23T20:00:00Z', 'upcoming'),

-- Group E
('France', 'Saudi Arabia', 'https://flagcdn.com/48x36/fr.png', 'https://flagcdn.com/48x36/sa.png', 'group', 'E', 25, '2026-06-15T00:00:00Z', 'upcoming'),
('Ivory Coast', 'New Caledonia', 'https://flagcdn.com/48x36/ci.png', 'https://flagcdn.com/48x36/nc.png', 'group', 'E', 26, '2026-06-15T20:00:00Z', 'upcoming'),
('France', 'Ivory Coast', 'https://flagcdn.com/48x36/fr.png', 'https://flagcdn.com/48x36/ci.png', 'group', 'E', 27, '2026-06-19T00:00:00Z', 'upcoming'),
('Saudi Arabia', 'New Caledonia', 'https://flagcdn.com/48x36/sa.png', 'https://flagcdn.com/48x36/nc.png', 'group', 'E', 28, '2026-06-20T00:00:00Z', 'upcoming'),
('New Caledonia', 'France', 'https://flagcdn.com/48x36/nc.png', 'https://flagcdn.com/48x36/fr.png', 'group', 'E', 29, '2026-06-24T00:00:00Z', 'upcoming'),
('Saudi Arabia', 'Ivory Coast', 'https://flagcdn.com/48x36/sa.png', 'https://flagcdn.com/48x36/ci.png', 'group', 'E', 30, '2026-06-24T00:00:00Z', 'upcoming'),

-- Group F
('Spain', 'Azerbaijan', 'https://flagcdn.com/48x36/es.png', 'https://flagcdn.com/48x36/az.png', 'group', 'F', 31, '2026-06-15T20:00:00Z', 'upcoming'),
('Honduras', 'Algeria', 'https://flagcdn.com/48x36/hn.png', 'https://flagcdn.com/48x36/dz.png', 'group', 'F', 32, '2026-06-16T00:00:00Z', 'upcoming'),
('Spain', 'Honduras', 'https://flagcdn.com/48x36/es.png', 'https://flagcdn.com/48x36/hn.png', 'group', 'F', 33, '2026-06-20T00:00:00Z', 'upcoming'),
('Azerbaijan', 'Algeria', 'https://flagcdn.com/48x36/az.png', 'https://flagcdn.com/48x36/dz.png', 'group', 'F', 34, '2026-06-20T20:00:00Z', 'upcoming'),
('Algeria', 'Spain', 'https://flagcdn.com/48x36/dz.png', 'https://flagcdn.com/48x36/es.png', 'group', 'F', 35, '2026-06-24T20:00:00Z', 'upcoming'),
('Azerbaijan', 'Honduras', 'https://flagcdn.com/48x36/az.png', 'https://flagcdn.com/48x36/hn.png', 'group', 'F', 36, '2026-06-24T20:00:00Z', 'upcoming'),

-- Group G
('Germany', 'Botswana', 'https://flagcdn.com/48x36/de.png', 'https://flagcdn.com/48x36/bw.png', 'group', 'G', 37, '2026-06-16T20:00:00Z', 'upcoming'),
('Colombia', 'Japan', 'https://flagcdn.com/48x36/co.png', 'https://flagcdn.com/48x36/jp.png', 'group', 'G', 38, '2026-06-17T00:00:00Z', 'upcoming'),
('Germany', 'Colombia', 'https://flagcdn.com/48x36/de.png', 'https://flagcdn.com/48x36/co.png', 'group', 'G', 39, '2026-06-21T00:00:00Z', 'upcoming'),
('Botswana', 'Japan', 'https://flagcdn.com/48x36/bw.png', 'https://flagcdn.com/48x36/jp.png', 'group', 'G', 40, '2026-06-21T00:00:00Z', 'upcoming'),
('Japan', 'Germany', 'https://flagcdn.com/48x36/jp.png', 'https://flagcdn.com/48x36/de.png', 'group', 'G', 41, '2026-06-25T00:00:00Z', 'upcoming'),
('Colombia', 'Botswana', 'https://flagcdn.com/48x36/co.png', 'https://flagcdn.com/48x36/bw.png', 'group', 'G', 42, '2026-06-25T00:00:00Z', 'upcoming'),

-- Group H
('Portugal', 'Equatorial Guinea', 'https://flagcdn.com/48x36/pt.png', 'https://flagcdn.com/48x36/gq.png', 'group', 'H', 43, '2026-06-17T20:00:00Z', 'upcoming'),
('Uzbekistan', 'Costa Rica', 'https://flagcdn.com/48x36/uz.png', 'https://flagcdn.com/48x36/cr.png', 'group', 'H', 44, '2026-06-17T20:00:00Z', 'upcoming'),
('Portugal', 'Uzbekistan', 'https://flagcdn.com/48x36/pt.png', 'https://flagcdn.com/48x36/uz.png', 'group', 'H', 45, '2026-06-21T20:00:00Z', 'upcoming'),
('Equatorial Guinea', 'Costa Rica', 'https://flagcdn.com/48x36/gq.png', 'https://flagcdn.com/48x36/cr.png', 'group', 'H', 46, '2026-06-22T00:00:00Z', 'upcoming'),
('Costa Rica', 'Portugal', 'https://flagcdn.com/48x36/cr.png', 'https://flagcdn.com/48x36/pt.png', 'group', 'H', 47, '2026-06-25T20:00:00Z', 'upcoming'),
('Equatorial Guinea', 'Uzbekistan', 'https://flagcdn.com/48x36/gq.png', 'https://flagcdn.com/48x36/uz.png', 'group', 'H', 48, '2026-06-25T20:00:00Z', 'upcoming'),

-- Group I
('Netherlands', 'South Africa', 'https://flagcdn.com/48x36/nl.png', 'https://flagcdn.com/48x36/za.png', 'group', 'I', 49, '2026-06-18T00:00:00Z', 'upcoming'),
('Paraguay', 'Australia', 'https://flagcdn.com/48x36/py.png', 'https://flagcdn.com/48x36/au.png', 'group', 'I', 50, '2026-06-18T20:00:00Z', 'upcoming'),
('Netherlands', 'Paraguay', 'https://flagcdn.com/48x36/nl.png', 'https://flagcdn.com/48x36/py.png', 'group', 'I', 51, '2026-06-22T20:00:00Z', 'upcoming'),
('South Africa', 'Australia', 'https://flagcdn.com/48x36/za.png', 'https://flagcdn.com/48x36/au.png', 'group', 'I', 52, '2026-06-23T00:00:00Z', 'upcoming'),
('Australia', 'Netherlands', 'https://flagcdn.com/48x36/au.png', 'https://flagcdn.com/48x36/nl.png', 'group', 'I', 53, '2026-06-27T00:00:00Z', 'upcoming'),
('South Africa', 'Paraguay', 'https://flagcdn.com/48x36/za.png', 'https://flagcdn.com/48x36/py.png', 'group', 'I', 54, '2026-06-27T00:00:00Z', 'upcoming'),

-- Group J
('England', 'Cameroon', 'https://flagcdn.com/48x36/gb-eng.png', 'https://flagcdn.com/48x36/cm.png', 'group', 'J', 55, '2026-06-19T00:00:00Z', 'upcoming'),
('Turkiye', 'Ecuador', 'https://flagcdn.com/48x36/tr.png', 'https://flagcdn.com/48x36/ec.png', 'group', 'J', 56, '2026-06-19T20:00:00Z', 'upcoming'),
('England', 'Turkiye', 'https://flagcdn.com/48x36/gb-eng.png', 'https://flagcdn.com/48x36/tr.png', 'group', 'J', 57, '2026-06-23T20:00:00Z', 'upcoming'),
('Cameroon', 'Ecuador', 'https://flagcdn.com/48x36/cm.png', 'https://flagcdn.com/48x36/ec.png', 'group', 'J', 58, '2026-06-23T20:00:00Z', 'upcoming'),
('Ecuador', 'England', 'https://flagcdn.com/48x36/ec.png', 'https://flagcdn.com/48x36/gb-eng.png', 'group', 'J', 59, '2026-06-27T20:00:00Z', 'upcoming'),
('Turkiye', 'Cameroon', 'https://flagcdn.com/48x36/tr.png', 'https://flagcdn.com/48x36/cm.png', 'group', 'J', 60, '2026-06-27T20:00:00Z', 'upcoming'),

-- Group K
('Italy', 'Bolivia', 'https://flagcdn.com/48x36/it.png', 'https://flagcdn.com/48x36/bo.png', 'group', 'K', 61, '2026-06-20T00:00:00Z', 'upcoming'),
('Croatia', 'TBD', 'https://flagcdn.com/48x36/hr.png', 'https://flagcdn.com/48x36/un.png', 'group', 'K', 62, '2026-06-20T20:00:00Z', 'upcoming'),
('Italy', 'Croatia', 'https://flagcdn.com/48x36/it.png', 'https://flagcdn.com/48x36/hr.png', 'group', 'K', 63, '2026-06-24T20:00:00Z', 'upcoming'),
('Bolivia', 'TBD', 'https://flagcdn.com/48x36/bo.png', 'https://flagcdn.com/48x36/un.png', 'group', 'K', 64, '2026-06-24T20:00:00Z', 'upcoming'),
('TBD', 'Italy', 'https://flagcdn.com/48x36/un.png', 'https://flagcdn.com/48x36/it.png', 'group', 'K', 65, '2026-06-28T20:00:00Z', 'upcoming'),
('Bolivia', 'Croatia', 'https://flagcdn.com/48x36/bo.png', 'https://flagcdn.com/48x36/hr.png', 'group', 'K', 66, '2026-06-28T20:00:00Z', 'upcoming'),

-- Group L
('Belgium', 'Iran', 'https://flagcdn.com/48x36/be.png', 'https://flagcdn.com/48x36/ir.png', 'group', 'L', 67, '2026-06-21T20:00:00Z', 'upcoming'),
('South Korea', 'Venezuela', 'https://flagcdn.com/48x36/kr.png', 'https://flagcdn.com/48x36/ve.png', 'group', 'L', 68, '2026-06-21T20:00:00Z', 'upcoming'),
('Belgium', 'South Korea', 'https://flagcdn.com/48x36/be.png', 'https://flagcdn.com/48x36/kr.png', 'group', 'L', 69, '2026-06-25T20:00:00Z', 'upcoming'),
('Iran', 'Venezuela', 'https://flagcdn.com/48x36/ir.png', 'https://flagcdn.com/48x36/ve.png', 'group', 'L', 70, '2026-06-26T00:00:00Z', 'upcoming'),
('Venezuela', 'Belgium', 'https://flagcdn.com/48x36/ve.png', 'https://flagcdn.com/48x36/be.png', 'group', 'L', 71, '2026-06-29T20:00:00Z', 'upcoming'),
('Iran', 'South Korea', 'https://flagcdn.com/48x36/ir.png', 'https://flagcdn.com/48x36/kr.png', 'group', 'L', 72, '2026-06-29T20:00:00Z', 'upcoming'),

-- Round of 32 (R16) - placeholder teams, will be updated as group stage ends
('R16-A1', 'R16-B2', 'https://flagcdn.com/48x36/un.png', 'https://flagcdn.com/48x36/un.png', 'r16', NULL, 73, '2026-07-04T20:00:00Z', 'upcoming'),
('R16-C1', 'R16-D2', 'https://flagcdn.com/48x36/un.png', 'https://flagcdn.com/48x36/un.png', 'r16', NULL, 74, '2026-07-05T00:00:00Z', 'upcoming'),
('R16-E1', 'R16-F2', 'https://flagcdn.com/48x36/un.png', 'https://flagcdn.com/48x36/un.png', 'r16', NULL, 75, '2026-07-05T20:00:00Z', 'upcoming'),
('R16-G1', 'R16-H2', 'https://flagcdn.com/48x36/un.png', 'https://flagcdn.com/48x36/un.png', 'r16', NULL, 76, '2026-07-06T00:00:00Z', 'upcoming'),
('R16-B1', 'R16-A2', 'https://flagcdn.com/48x36/un.png', 'https://flagcdn.com/48x36/un.png', 'r16', NULL, 77, '2026-07-06T20:00:00Z', 'upcoming'),
('R16-D1', 'R16-C2', 'https://flagcdn.com/48x36/un.png', 'https://flagcdn.com/48x36/un.png', 'r16', NULL, 78, '2026-07-07T00:00:00Z', 'upcoming'),
('R16-F1', 'R16-E2', 'https://flagcdn.com/48x36/un.png', 'https://flagcdn.com/48x36/un.png', 'r16', NULL, 79, '2026-07-07T20:00:00Z', 'upcoming'),
('R16-H1', 'R16-G2', 'https://flagcdn.com/48x36/un.png', 'https://flagcdn.com/48x36/un.png', 'r16', NULL, 80, '2026-07-08T00:00:00Z', 'upcoming'),
('R16-I1', 'R16-J2', 'https://flagcdn.com/48x36/un.png', 'https://flagcdn.com/48x36/un.png', 'r16', NULL, 81, '2026-07-08T20:00:00Z', 'upcoming'),
('R16-K1', 'R16-L2', 'https://flagcdn.com/48x36/un.png', 'https://flagcdn.com/48x36/un.png', 'r16', NULL, 82, '2026-07-09T00:00:00Z', 'upcoming'),
('R16-J1', 'R16-I2', 'https://flagcdn.com/48x36/un.png', 'https://flagcdn.com/48x36/un.png', 'r16', NULL, 83, '2026-07-09T20:00:00Z', 'upcoming'),
('R16-L1', 'R16-K2', 'https://flagcdn.com/48x36/un.png', 'https://flagcdn.com/48x36/un.png', 'r16', NULL, 84, '2026-07-10T00:00:00Z', 'upcoming'),
('3rd-ABC', 'R16-TBD', 'https://flagcdn.com/48x36/un.png', 'https://flagcdn.com/48x36/un.png', 'r16', NULL, 85, '2026-07-10T20:00:00Z', 'upcoming'),
('3rd-DEF', 'R16-TBD', 'https://flagcdn.com/48x36/un.png', 'https://flagcdn.com/48x36/un.png', 'r16', NULL, 86, '2026-07-11T00:00:00Z', 'upcoming'),
('3rd-GHI', 'R16-TBD', 'https://flagcdn.com/48x36/un.png', 'https://flagcdn.com/48x36/un.png', 'r16', NULL, 87, '2026-07-11T20:00:00Z', 'upcoming'),
('3rd-JKL', 'R16-TBD', 'https://flagcdn.com/48x36/un.png', 'https://flagcdn.com/48x36/un.png', 'r16', NULL, 88, '2026-07-12T00:00:00Z', 'upcoming'),

-- Quarter Finals
('QF-W73', 'QF-W74', 'https://flagcdn.com/48x36/un.png', 'https://flagcdn.com/48x36/un.png', 'qf', NULL, 89, '2026-07-14T20:00:00Z', 'upcoming'),
('QF-W75', 'QF-W76', 'https://flagcdn.com/48x36/un.png', 'https://flagcdn.com/48x36/un.png', 'qf', NULL, 90, '2026-07-15T00:00:00Z', 'upcoming'),
('QF-W77', 'QF-W78', 'https://flagcdn.com/48x36/un.png', 'https://flagcdn.com/48x36/un.png', 'qf', NULL, 91, '2026-07-15T20:00:00Z', 'upcoming'),
('QF-W79', 'QF-W80', 'https://flagcdn.com/48x36/un.png', 'https://flagcdn.com/48x36/un.png', 'qf', NULL, 92, '2026-07-16T00:00:00Z', 'upcoming'),
('QF-W81', 'QF-W82', 'https://flagcdn.com/48x36/un.png', 'https://flagcdn.com/48x36/un.png', 'qf', NULL, 93, '2026-07-16T20:00:00Z', 'upcoming'),
('QF-W83', 'QF-W84', 'https://flagcdn.com/48x36/un.png', 'https://flagcdn.com/48x36/un.png', 'qf', NULL, 94, '2026-07-17T00:00:00Z', 'upcoming'),
('QF-W85', 'QF-W86', 'https://flagcdn.com/48x36/un.png', 'https://flagcdn.com/48x36/un.png', 'qf', NULL, 95, '2026-07-17T20:00:00Z', 'upcoming'),
('QF-W87', 'QF-W88', 'https://flagcdn.com/48x36/un.png', 'https://flagcdn.com/48x36/un.png', 'qf', NULL, 96, '2026-07-18T00:00:00Z', 'upcoming'),

-- Semi Finals
('SF-W89', 'SF-W90', 'https://flagcdn.com/48x36/un.png', 'https://flagcdn.com/48x36/un.png', 'sf', NULL, 97, '2026-07-18T20:00:00Z', 'upcoming'),
('SF-W91', 'SF-W92', 'https://flagcdn.com/48x36/un.png', 'https://flagcdn.com/48x36/un.png', 'sf', NULL, 98, '2026-07-19T00:00:00Z', 'upcoming'),
('SF-W93', 'SF-W94', 'https://flagcdn.com/48x36/un.png', 'https://flagcdn.com/48x36/un.png', 'sf', NULL, 99, '2026-07-19T20:00:00Z', 'upcoming'),
('SF-W95', 'SF-W96', 'https://flagcdn.com/48x36/un.png', 'https://flagcdn.com/48x36/un.png', 'sf', NULL, 100, '2026-07-20T00:00:00Z', 'upcoming'),

-- Third Place
('3rd-L97', '3rd-L98', 'https://flagcdn.com/48x36/un.png', 'https://flagcdn.com/48x36/un.png', 'third', NULL, 101, '2026-07-22T20:00:00Z', 'upcoming'),

-- Final
('Final-W97', 'Final-W98', 'https://flagcdn.com/48x36/un.png', 'https://flagcdn.com/48x36/un.png', 'final', NULL, 102, '2026-07-23T20:00:00Z', 'upcoming');
