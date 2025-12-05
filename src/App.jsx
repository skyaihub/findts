import React, { useState } from 'react';
import {
  Search,
  Sparkles,
  Globe,
  Rocket,
  Brain,
  Zap,
  ExternalLink,
  Pin,
  PinOff
} from 'lucide-react';

const App = () => {
  const aiWebsites = [
    {
      name: 'DeepSeek',
      url: 'https://deepseek.com  ',
      category: '大模型',
      description: '深度求索推出的AI大模型',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: '豆包',
      url: 'https://www.doubao.com  ',
      category: '大模型',
      description: '字节跳动推出的AI助手',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: '通义千问',
      url: 'https://tongyi.aliyun.com  ',
      category: '大模型',
      description: '阿里云推出的AI大模型',
      icon: <Sparkles className="w-6 h-6" />,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      name: 'Kimi',
      url: 'https://kimi.moonshot.cn  ',
      category: '大模型',
      description: '月之暗面推出的AI助手',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      name: '元宝',
      url: 'https://www.minimaxi.com  ',
      category: '大模型',
      description: '面壁智能推出的AI助手',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-purple-500 to-violet-500'
    },
    {
      name: '文心一言',
      url: 'https://yiyan.baidu.com  ',
      category: '大模型',
      description: '百度推出的AI大模型',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      name: 'ChatGPT',
      url: 'https://chat.openai.com  ',
      category: '聊天机器人',
      description: 'OpenAI推出的对话式AI',
      icon: <Sparkles className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Claude',
      url: 'https://claude.ai  ',
      category: '聊天机器人',
      description: 'Anthropic推出的AI助手',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Gemini',
      url: 'https://gemini.google.com  ',
      category: '大模型',
      description: 'Google推出的AI助手',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-red-500 to-orange-500'
    },
    {
      name: 'Midjourney',
      url: 'https://www.midjourney.com  ',
      category: '图像生成',
      description: 'AI图像生成工具',
      icon: <Sparkles className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'DALL-E',
      url: 'https://www.bing.com/images/create  ',
      category: '图像生成',
      description: 'OpenAI的图像生成模型',
      icon: <Rocket className="w-6 h-6" />,
      color: 'from-pink-500 to-rose-500'
    },
    {
      name: 'Notion AI',
      url: 'https://www.notion.so/product/ai  ',
      category: '生产力工具',
      description: '集成在Notion中的AI功能',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-gray-500 to-slate-500'
    },
    {
      name: 'Perplexity',
      url: 'https://www.perplexity.ai  ',
      category: '搜索引擎',
      description: 'AI驱动的答案引擎',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-cyan-500 to-teal-500'
    },
    {
      name: 'GitHub Copilot',
      url: 'https://github.com/features/copilot  ',
      category: '编程助手',
      description: 'AI编程助手',
      icon: <Rocket className="w-6 h-6" />,
      color: 'from-blue-600 to-indigo-600'
    },
    {
      name: 'Runway ML',
      url: 'https://runwayml.com  ',
      category: '视频生成',
      description: 'AI视频编辑和生成平台',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-purple-600 to-violet-600'
    },
    {
      name: 'Stable Diffusion',
      url: 'https://stability.ai  ',
      category: '图像生成',
      description: '开源AI图像生成模型',
      icon: <Sparkles className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Hugging Face',
      url: 'https://huggingface.co  ',
      category: 'AI平台',
      description: '机器学习和AI模型平台',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-yellow-500 to-amber-500'
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [pinnedItems, setPinnedItems] = useState(new Set());

  const categories = [...new Set(aiWebsites.map(site => site.category))];

  const togglePin = (name) => {
    const newPinned = new Set(pinnedItems);
    if (newPinned.has(name)) {
      newPinned.delete(name);
    } else {
      newPinned.add(name);
    }
    setPinnedItems(newPinned);
  };

  const filtered = aiWebsites.filter(site => {
    const matchesSearch = site.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          site.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '全部' || site.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const pinned = filtered.filter(site => pinnedItems.has(site.name));
  const unpinned = filtered.filter(site => !pinnedItems.has(site.name));
  const displayedWebsites = [...pinned, ...unpinned];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              发现智能
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              一站式发现和访问市面上主流的AI网站和工具
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="搜索AI网站..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Category Filter */}
      <div className="container mx-auto px-4 pb-8">
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setSelectedCategory('全部')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === '全部'
                ? 'bg-purple-600 text-white shadow-lg'
                : 'bg-white/10 text-slate-300 hover:bg-white/20'
            }`}
          >
            全部 ({aiWebsites.length})
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              {category} ({aiWebsites.filter(site => site.category === category).length})
            </button>
          ))}
        </div>
      </div>

      {/* AI Websites Grid */}
      <main className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedWebsites.map((site) => (
            <a
              key={site.name}
              href={site.url.trim()}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative"
            >
              {/* 图钉按钮 */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  togglePin(site.name);
                }}
                className="absolute top-2 right-2 p-1.5 rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-purple-600 transition-colors z-10"
                aria-label={pinnedItems.has(site.name) ? '取消置顶' : '置顶'}
              >
                {pinnedItems.has(site.name) ? (
                  <PinOff className="w-4 h-4" />
                ) : (
                  <Pin className="w-4 h-4" />
                )}
              </button>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${site.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${site.color} flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform`}>
                      {site.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {site.name}
                      </h3>
                      <span className="text-sm text-purple-300 font-medium">
                        {site.category}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {site.description}
                  </p>
                  <div className="mt-4 flex items-center text-sm text-cyan-400 font-medium">
                    访问网站
                    <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {displayedWebsites.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
              <Search className="w-12 h-12 text-slate-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">未找到匹配的网站</h3>
            <p className="text-slate-400">尝试使用不同的关键词进行搜索</p>
          </div>
        )}
      </main>

      {/* Enhanced Footer (without GitHub) */}
      <footer className="border-t border-white/10 bg-black/20">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6 text-slate-300 flex-wrap">
              <button
                onClick={() => window.location.href = 'mailto:findthesmart@outlook.com'}
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                联系我们
              </button>
              <span className="hidden md:inline">·</span>
              <button
                onClick={() => window.location.href = 'mailto:findthesmart@outlook.com?subject=加入我们'}
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                加入我们
              </button>
              <span className="hidden md:inline">·</span>
              <span className="text-sm">邮箱：findthesmart@outlook.com</span>
            </div>
            <p className="text-slate-400 text-sm">
              © 2025 AI网站导航 | 一站式AI工具发现平台
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
