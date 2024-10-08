--
-- PostgreSQL database dump
--

-- Dumped from database version 17rc1
-- Dumped by pg_dump version 17rc1

-- Started on 2024-10-07 18:34:46

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 220 (class 1259 OID 16432)
-- Name: assets; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.assets (
    id integer NOT NULL,
    path character varying(255) NOT NULL
);


ALTER TABLE public.assets OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16431)
-- Name: assets_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.assets_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.assets_id_seq OWNER TO postgres;

--
-- TOC entry 4873 (class 0 OID 0)
-- Dependencies: 219
-- Name: assets_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.assets_id_seq OWNED BY public.assets.id;


--
-- TOC entry 222 (class 1259 OID 16439)
-- Name: projects; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.projects (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    description text NOT NULL,
    asset_id integer
);


ALTER TABLE public.projects OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16438)
-- Name: projects_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.projects_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.projects_id_seq OWNER TO postgres;

--
-- TOC entry 4874 (class 0 OID 0)
-- Dependencies: 221
-- Name: projects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.projects_id_seq OWNED BY public.projects.id;


--
-- TOC entry 218 (class 1259 OID 16415)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    first_name character varying(255) NOT NULL,
    last_name character varying(255) NOT NULL,
    age integer NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16414)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO postgres;

--
-- TOC entry 4875 (class 0 OID 0)
-- Dependencies: 217
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 4706 (class 2604 OID 16435)
-- Name: assets id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.assets ALTER COLUMN id SET DEFAULT nextval('public.assets_id_seq'::regclass);


--
-- TOC entry 4707 (class 2604 OID 16442)
-- Name: projects id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.projects ALTER COLUMN id SET DEFAULT nextval('public.projects_id_seq'::regclass);


--
-- TOC entry 4705 (class 2604 OID 16418)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 4865 (class 0 OID 16432)
-- Dependencies: 220
-- Data for Name: assets; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.assets (id, path) FROM stdin;
1	spring-boot.svg
2	spring-framework.svg
3	spring-data.svg
4	spring-cloud.svg
5	spring-data-flow.svg
6	spring-security.svg
\.


--
-- TOC entry 4867 (class 0 OID 16439)
-- Dependencies: 222
-- Data for Name: projects; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.projects (id, name, description, asset_id) FROM stdin;
1	Spring Boot	Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.	1
2	Spring Framework	Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more.	2
3	Spring Data	Provides a consistent approach to data access - relational, non-relational, map-reduce, and beyond.	3
4	Spring Cloud	Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.	4
5	Spring Cloud Data Flow	Provides an orchestration service for composable data microservice applications on modern runtimes.	5
6	Spring Security	Protects your application with comprehensive and extensible authentication and authorization support.	6
\.


--
-- TOC entry 4863 (class 0 OID 16415)
-- Dependencies: 218
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, username, password, first_name, last_name, age) FROM stdin;
4	admin	$2a$10$cjQ2bShu/LGDw4oMDDFa6uioP7L3yz4SHZ4HBPV7xNivHFs.a9Wqi	Milena	Korotkaya	19
5	adm	$2a$10$YvEN7.KAoflDoVMefUpHve2uoQiuLc6354CtfwIZ4SVtgHUiA2sOC	asd	asd	10
13	admi	$2a$10$9l.FiM2Tvbc6nycL8JWWYulMylNjLHGh0BcXh6c0nQ4uPEqRe47y.	fdbfd	fdgd	10
\.


--
-- TOC entry 4876 (class 0 OID 0)
-- Dependencies: 219
-- Name: assets_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.assets_id_seq', 1, false);


--
-- TOC entry 4877 (class 0 OID 0)
-- Dependencies: 221
-- Name: projects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.projects_id_seq', 1, false);


--
-- TOC entry 4878 (class 0 OID 0)
-- Dependencies: 217
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 13, true);


--
-- TOC entry 4713 (class 2606 OID 16437)
-- Name: assets assets_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.assets
    ADD CONSTRAINT assets_pkey PRIMARY KEY (id);


--
-- TOC entry 4715 (class 2606 OID 16446)
-- Name: projects projects_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);


--
-- TOC entry 4709 (class 2606 OID 16430)
-- Name: users username; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT username UNIQUE (username);


--
-- TOC entry 4711 (class 2606 OID 16422)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 4716 (class 2606 OID 16447)
-- Name: projects projects_asset_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_asset_id_fkey FOREIGN KEY (asset_id) REFERENCES public.assets(id);


-- Completed on 2024-10-07 18:34:54

--
-- PostgreSQL database dump complete
--

