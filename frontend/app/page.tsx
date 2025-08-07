'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Code2, Rocket, Bot, TestTube, Package, Shield, Store, Cloud, Play, ArrowRight, Menu, X, FileCode, Zap, Star, Github, Twitter, Linkedin, Mail, Globe, Users, Award, Heart } from 'lucide-react'

export default function WebSorobanLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [typedCode, setTypedCode] = useState('')
  const [currentLine, setCurrentLine] = useState(0)

  const codeLines = [
    '#![no_std]',
    'use soroban_sdk::{contract, contractimpl, Env, Symbol, Address};',
    '',
    '#[contract]',
    'pub struct PaymentContract;',
    '',
    '#[contractimpl]',
    'impl PaymentContract {',
    '    pub fn init(env: Env) {',
    '        let admin = env.current_contract_address();',
    '        env.storage().instance().set(&symbol("admin"), &admin);',
    '    }',
    '',
    '    pub fn transfer(env: Env, from: Address, to: Address, amount: i128) {',
    '        from.require_auth();',
    '        let balance_key = symbol("balance");',
    '        let from_balance = env.storage().instance().get(&balance_key).unwrap_or(0);',
    '        require!(from_balance >= amount, Error::InsufficientBalance);',
    '        env.storage().instance().set(&balance_key, &(from_balance - amount));',
    '        let to_balance = env.storage().instance().get(&balance_key).unwrap_or(0);',
    '        env.storage().instance().set(&balance_key, &(to_balance + amount));',
    '    }',
    '}'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentLine < codeLines.length) {
        const line = codeLines[currentLine]
        if (typedCode.length < line.length) {
          setTypedCode(prev => prev + line[typedCode.length])
        } else {
          setTypedCode(prev => prev + '\n')
          setCurrentLine(prev => prev + 1)
        }
      } else {
        // Reset animation
        setTimeout(() => {
          setTypedCode('')
          setCurrentLine(0)
        }, 2000)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [typedCode, currentLine])

  const features = [
    {
      icon: Bot,
      title: "AI Copilot for Contract Generation",
      description: "Intelligent code completion and contract generation powered by advanced AI models trained on Soroban patterns."
    },
    {
      icon: Rocket,
      title: "One-click Deployment to Stellar Testnet",
      description: "Deploy your contracts instantly to Stellar testnet with automated configuration and network management."
    },
    {
      icon: Cloud,
      title: "WASM Compilation in the Cloud",
      description: "Compile your Rust contracts to WASM in our optimized cloud infrastructure without local setup."
    },
    {
      icon: TestTube,
      title: "Run Inline Unit & Integration Tests",
      description: "Execute comprehensive test suites directly in the browser with real-time feedback and debugging."
    },
    {
      icon: Package,
      title: "Auto-generate Client SDKs",
      description: "Automatically generate TypeScript, JavaScript, and Go SDKs for seamless frontend integration."
    },
    {
      icon: Shield,
      title: "AI-Powered Security Audits",
      description: "Advanced static analysis and vulnerability detection using machine learning security models."
    },
    {
      icon: Store,
      title: "Curated Marketplace of Pre-Audited Templates",
      description: "Access professionally audited contract templates for DeFi, NFTs, governance, and more."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-100">
      {/* Navigation */}
      <nav className="border-b border-slate-200/60 bg-white/90 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              {/* <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-slate-800 rounded-xl flex items-center justify-center shadow-lg">
                <Code2 className="w-6 h-6 text-white" />
              </div> */}
              <span className="text-2xl font-display bg-gradient-to-r from-blue-600 to-slate-800 bg-clip-text text-transparent">
                Web Soroban
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
                Features
              </a>
              <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
                Pricing
              </a>
              {/* <a href="/docs" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
                Docs
              </a> */}
              <Button variant="ghost" className="text-slate-600 hover:text-slate-900">
                Login
              </Button>
              <Button 
                className="bg-gradient-to-r from-blue-600 to-slate-700 hover:from-blue-700 hover:to-slate-800 text-white rounded-lg px-6"
                onClick={() => window.location.href = '/ide'}
              >
                Launch IDE
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-slate-200 py-4">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
                  Features
                </a>
                <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
                  Pricing
                </a>
                <a href="/docs" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
                  Docs
                </a>
                <Button variant="ghost" className="justify-start text-slate-600 hover:text-slate-900">
                  Login
                </Button>
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-slate-700 text-white rounded-lg"
                  onClick={() => window.location.href = '/ide'}
                >
                  Launch IDE
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Editor Mockup */}
      <section className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-display leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-slate-800 bg-clip-text text-transparent">
                  Web Soroban
                </span>
                <br />
                <span className="text-slate-900">
                  The Smartest Way to Build on Stellar
                </span>
              </h1>
              
              <p className="text-xl font-body text-slate-600 leading-relaxed max-w-lg">
                Compile, Deploy, and Audit Soroban Smart Contracts — with AI
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-slate-700 hover:from-blue-700 hover:to-slate-800 text-white rounded-xl px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                onClick={() => window.location.href = '/ide'}
              >
                <Play className="w-5 h-5 mr-2" />
                Launch IDE
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-xl px-8 py-6 text-lg font-semibold border-2 hover:bg-slate-50"
              >
                View Features
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-slate-500">
              <div className="flex items-center">
                <Zap className="w-4 h-4 mr-2 text-blue-500" />
                No Setup Required
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-blue-500" />
                Enterprise Security
              </div>
            </div>
          </div>

          {/* Editor Mockup */}
          <div className="relative">
            <Card className="border-0 shadow-2xl rounded-2xl overflow-hidden bg-slate-900">
              {/* Editor Header */}
              <div className="bg-slate-800 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-4 text-slate-400 text-sm">
                  <div className="flex items-center">
                    <FileCode className="w-4 h-4 mr-2" />
                    contract.rs
                  </div>
                </div>
              </div>

              {/* Editor Content */}
              <div className="p-6 h-80 overflow-hidden">
                                  <div className="flex">
                    {/* Line Numbers */}
                    <div className="text-slate-500 text-sm font-mono-code mr-4 select-none">
                      {Array.from({ length: 15 }, (_, i) => (
                        <div key={i} className="leading-6">
                          {i + 1}
                        </div>
                      ))}
                    </div>

                                      {/* Code Content */}
                  <div className="flex-1">
                    <pre className="text-sm font-mono-code leading-6 text-slate-300">
                      <code>
                        <span className="text-purple-400">#![no_std]</span>
                        {'\n'}
                        <span className="text-blue-400">use</span> <span className="text-green-400">soroban_sdk</span>::{'{'}contract, contractimpl, Env, Symbol, Address, Map, Vec{'}'};
                        {'\n'}
                        <span className="text-blue-400">use</span> <span className="text-green-400">soroban_sdk</span>::<span className="text-green-300">symbol</span>;
                        {'\n\n'}
                        <span className="text-yellow-400">#[contract]</span>
                        {'\n'}
                        <span className="text-blue-400">pub struct</span> <span className="text-green-300">PaymentContract</span>;
                        {'\n\n'}
                        <span className="text-yellow-400">#[contractimpl]</span>
                        {'\n'}
                        <span className="text-blue-400">impl</span> <span className="text-green-300">PaymentContract</span> {'{'}
                        {'\n'}
                        {'    '}<span className="text-blue-400">pub fn</span> <span className="text-yellow-300">init</span>(env: <span className="text-green-300">Env</span>) {'{'}
                        {'\n'}
                        {'        '}<span className="text-blue-400">let</span> <span className="text-blue-300">admin</span> = env.current_contract_address();
                        {'\n'}
                        {'        '}env.storage().instance().set(&<span className="text-green-300">symbol</span>(<span className="text-orange-300">"admin"</span>), &admin);
                        {'\n'}
                        {'    '}{'}'}
                        {'\n\n'}
                        {'    '}<span className="text-blue-400">pub fn</span> <span className="text-yellow-300">transfer</span>(env: <span className="text-green-300">Env</span>, from: <span className="text-green-300">Address</span>, to: <span className="text-green-300">Address</span>, amount: <span className="text-blue-300">i128</span>) {'{'}
                        {'\n'}
                        {'        '}from.<span className="text-yellow-300">require_auth</span>();
                        {'\n'}
                        {'        '}<span className="text-blue-400">let</span> <span className="text-blue-300">balance_key</span> = <span className="text-green-300">symbol</span>(<span className="text-orange-300">"balance"</span>);
                        {'\n'}
                        {'        '}<span className="text-blue-400">let</span> <span className="text-blue-300">from_balance</span> = env.storage().instance().get(&balance_key).unwrap_or(0);
                        {'\n'}
                        {'        '}<span className="text-blue-400">require</span>!(from_balance {'>='} amount, <span className="text-green-300">Error</span>::<span className="text-yellow-300">InsufficientBalance</span>);
                        {'\n\n'}
                        {'        '}<span className="text-gray-500">// Update balances</span>
                        {'\n'}
                        {'        '}env.storage().instance().set(&balance_key, &(from_balance {'-'} amount));
                        {'\n'}
                        {'        '}<span className="text-blue-400">let</span> <span className="text-blue-300">to_balance</span> = env.storage().instance().get(&balance_key).unwrap_or(0);
                        {'\n'}
                        {'        '}env.storage().instance().set(&balance_key, &(to_balance {'+'} amount));
                        {'\n'}
                        {'    '}{'}'}
                        {'\n\n'}
                        {'    '}<span className="text-blue-400">pub fn</span> <span className="text-yellow-300">get_balance</span>(env: <span className="text-green-300">Env</span>, address: <span className="text-green-300">Address</span>) -> <span className="text-blue-300">i128</span> {'{'}
                        {'\n'}
                        {'        '}env.storage().instance().get(&<span className="text-green-300">symbol</span>(<span className="text-orange-300">"balance"</span>)).unwrap_or(0)
                        {'\n'}
                        {'    '}{'}'}
                        {'\n'}
                        {'}'}
                        {'\n\n'}
                        <span className="text-yellow-400">#[derive(Clone, Debug, Eq, PartialEq)]</span>
                        {'\n'}
                        <span className="text-blue-400">pub enum</span> <span className="text-green-300">Error</span> {'{'}
                        {'\n'}
                        {'    '}<span className="text-yellow-300">InsufficientBalance</span>,
                        {'\n'}
                        {'    '}<span className="text-yellow-300">Unauthorized</span>,
                        {'\n'}
                        {'}'}
                        <span className="animate-pulse bg-blue-500 w-2 h-5 inline-block ml-1"></span>
                      </code>
                    </pre>
                  </div>
                </div>
              </div>

              {/* AI Copilot Suggestion */}
              <div className="bg-blue-900/30 border-t border-blue-800/50 px-6 py-3">
                <div className="flex items-center text-blue-300 text-sm">
                  <Bot className="w-4 h-4 mr-2" />
                  AI Copilot: Press Tab to accept suggestion
                </div>
              </div>
            </Card>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
              ✓ Compiled
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
              🤖 AI Active
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-heading mb-6 text-slate-900">
            Everything you need for Soroban development
          </h2>
          <p className="text-xl font-body text-slate-600 max-w-3xl mx-auto">
            From AI-powered code generation to one-click deployment, Web Soroban provides a complete toolkit for professional smart contract development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm rounded-3xl group hover:-translate-y-2 border border-slate-100/50">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-slate-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading mb-4 text-slate-900 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed font-body">{feature.description}</p>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200">
                    <Star className="w-3 h-3 mr-1" />
                    AI Powered
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Demo Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-heading mb-6 text-slate-900">
            See Web Soroban in Action
          </h2>
          <p className="text-xl font-body text-slate-600 mb-12">
            Watch how our AI copilot helps you write secure, efficient Soroban smart contracts
          </p>

          <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden bg-slate-900">
            <div className="bg-slate-800 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-slate-400 text-sm font-mono">
                payment_contract.rs
              </div>
            </div>
            
            <div className="p-8 h-64 overflow-hidden">
              <pre className="text-green-400 font-mono-code text-sm leading-relaxed">
                <code>{typedCode}</code>
                <span className="animate-pulse bg-green-400 w-2 h-5 inline-block"></span>
              </pre>
            </div>

            <div className="bg-slate-800 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center text-slate-400 text-sm">
                <Bot className="w-4 h-4 mr-2" />
                AI Copilot Active
              </div>
              <div className="flex items-center space-x-4 text-slate-400 text-sm">
                <span>✓ Syntax Valid</span>
                <span>✓ Security Checked</span>
                <span>✓ Ready to Deploy</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-heading mb-6 text-slate-900">
            Ready to build the future of finance?
          </h2>
          <p className="text-xl font-body text-slate-600 mb-10">
            Join thousands of developers building on Stellar with Web Soroban
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-slate-700 hover:from-blue-700 hover:to-slate-800 text-white rounded-xl px-10 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              onClick={() => window.location.href = '/ide'}
            >
              <Play className="w-5 h-5 mr-2" />
              Launch IDE Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-xl px-10 py-6 text-lg font-semibold border-2"
            >
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50/30 backdrop-blur-sm rounded-2xl ">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                {/* <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-slate-800 rounded-xl flex items-center justify-center shadow-lg">
                  <Code2 className="w-7 h-7 text-white" />
                </div> */}
                <div>
                  <span className="text-2xl font-display bg-gradient-to-r from-blue-600 to-slate-800 bg-clip-text text-transparent">
                    Web Soroban
                  </span>
                  <div className="flex items-center space-x-1 mt-1">
                    <Star className="w-3 h-3 text-yellow-400" />
                    <span className="text-xs text-slate-500 font-medium">Stellar IDE</span>
                  </div>
                </div>
              </div>
              <p className="text-slate-600 font-body leading-relaxed">
                The professional IDE for Stellar Soroban smart contract development with AI-powered assistance.
              </p>
              <div className="flex space-x-3">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border border-blue-200">
                  <Award className="w-3 h-3 mr-1" />
                  AI Powered
                </Badge>
                <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border border-green-200">
                  <Shield className="w-3 h-3 mr-1" />
                  Secure
                </Badge>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-heading text-slate-900 mb-6 text-lg">Product</h3>
              <div className="space-y-3">
                <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors font-body group">
                  <span className="group-hover:translate-x-1 transition-transform inline-block">Features</span>
                </a>
                <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors font-body group">
                  <span className="group-hover:translate-x-1 transition-transform inline-block">Pricing</span>
                </a>
                <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors font-body group">
                  <span className="group-hover:translate-x-1 transition-transform inline-block">Changelog</span>
                </a>
                <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors font-body group">
                  <span className="group-hover:translate-x-1 transition-transform inline-block">Roadmap</span>
                </a>
              </div>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="font-heading text-slate-900 mb-6 text-lg">Resources</h3>
              <div className="space-y-3">
                <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors font-body group">
                  <span className="group-hover:translate-x-1 transition-transform inline-block">Documentation</span>
                </a>
                <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors font-body group">
                  <span className="group-hover:translate-x-1 transition-transform inline-block">API Reference</span>
                </a>
                <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors font-body group">
                  <span className="group-hover:translate-x-1 transition-transform inline-block">Community</span>
                </a>
                <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors font-body group">
                  <span className="group-hover:translate-x-1 transition-transform inline-block">Support</span>
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-heading text-slate-900 mb-6 text-lg">Company</h3>
              <div className="space-y-3">
                <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors font-body group">
                  <span className="group-hover:translate-x-1 transition-transform inline-block">About</span>
                </a>
                <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors font-body group">
                  <span className="group-hover:translate-x-1 transition-transform inline-block">Blog</span>
                </a>
                <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors font-body group">
                  <span className="group-hover:translate-x-1 transition-transform inline-block">Careers</span>
                </a>
                <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors font-body group">
                  <span className="group-hover:translate-x-1 transition-transform inline-block">Contact</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-slate-200 mt-12 pt-8">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              {/* Copyright */}
              <div className="flex items-center space-x-4">
                <div className="text-slate-600 font-body">
                  © 2025 Web Soroban. All rights reserved.
                </div>
                <div className="flex items-center space-x-1 text-slate-500">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm font-body">Built for Stellar Community</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <a href="#" className="w-10 h-10 bg-slate-100 hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors group">
                  <Github className="w-5 h-5 text-slate-600 group-hover:text-blue-600" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-100 hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors group">
                  <Twitter className="w-5 h-5 text-slate-600 group-hover:text-blue-600" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-100 hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors group">
                  <Linkedin className="w-5 h-5 text-slate-600 group-hover:text-blue-600" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-100 hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors group">
                  <Mail className="w-5 h-5 text-slate-600 group-hover:text-blue-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
