import React from 'react';
import { X, Camera, TrendingUp, ChefHat, ExternalLink, Award, Calendar } from 'lucide-react';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'photography' | 'stocks' | 'cooking';
}

const InterestDrawer: React.FC<DrawerProps> = ({ isOpen, onClose, type }) => {
  const getDrawerContent = () => {
    switch (type) {
      case 'photography':
        return {
          icon: <Camera className="text-blue-600" size={32} />,
          title: "Photography",
          subtitle: "Capturing moments through my lens",
          description: "Photography is my creative outlet where I explore the world through different perspectives. From landscapes to portraits, I find joy in freezing moments in time. I am experienced with Nikon and my personal phone, the Nothing Phone 3a",
          highlights: [
            {
              title: "Nature Photography",
              description: "Specializing in landscape and wildlife photography across Kerala's diverse ecosystems.",
              achievements: ["50+ landscape shots", "Wildlife documentation", "Local exhibitions"]
            },
            {
              title: "Portrait Photography",
              description: "Capturing human emotions and expressions in natural and studio settings.",
              achievements: ["100+ portrait sessions", "Event photography", "Family portraits"]
            },
            {
              title: "Street Photography",
              description: "Documenting everyday life and cultural moments in urban and rural settings.",
              achievements: ["Cultural documentation", "Street art photography", "Social stories"]
            }
          ],
          gallery: [
            "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=400",
            "https://images.pexels.com/photos/1252869/pexels-photo-1252869.jpeg?auto=compress&cs=tinysrgb&w=400",
            "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=400",
            "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400"
          ],
          equipment: ["Nikon 5200", "24-70mm f/2.8L", "70-200mm f/2.8L", "Nothing Phone 3a"]
        };
      
      case 'stocks':
        return {
          icon: <TrendingUp className="text-emerald-600" size={32} />,
          title: "Stock Market Trading",
          subtitle: "Algorithmic trading and market analysis",
          description: "I combine my analytical skills from bioinformatics with financial markets, developing algorithmic trading strategies and conducting market research.",
          highlights: [
           
            {
              title: "Technical Analysis",
              description: "Using statistical methods and chart patterns to analyze market trends.",
              achievements: ["Market trend analysis", "Pattern recognition", "Volume Studies","Moving Averages"]
            },
            {
              title: "Quantitative Research",
              description: "Applying statistical methods to identify market inefficiencies and opportunities.",
              achievements: ["Long Term investments", "Market studies", "Data-driven insights"]
            },
             {
              title: "Algorithmic Trading",
              description: "Developing and backtesting automated trading strategies using Python and R.",
              achievements: ["Learning Curve", "Risk management systems", "Upstox API"]
            }
          ],
          tools: ["Python", "R", "TradingView", "MetaTrader", "Bloomberg Terminal"],
          strategies: ["Mean Reversion", "Momentum Trading", "Pairs Trading", "Options Strategies"],
          performance: {
            "Total Returns": "30% p.a.",
            "Max Drawdown": "8.5%",
            "Win Rate": "68%"
          }
        };
      
      case 'cooking':
        return {
          icon: <ChefHat className="text-orange-600" size={32} />,
          title: "Culinary Arts",
          subtitle: "Exploring flavors and traditional recipes",
          description: "Cooking is my way of connecting with culture and creativity. I love experimenting with traditional Kerala cuisine and fusion dishes.",
          highlights: [
            {
              title: "Kerala Traditional Cuisine",
              description: "Mastering authentic Kerala recipes passed down through generations.",
              achievements: ["50+ traditional recipes", "Spice blending expertise", "Regional specialties"]
            },
            {
              title: "Fusion Cooking",
              description: "Creating innovative dishes by combining different culinary traditions.",
              achievements: ["Indo-Continental fusion", "Modern plating techniques", "Flavor experimentation"]
            },
            {
              title: "Baking & Desserts",
              description: "Crafting artisanal breads, cakes, and traditional Indian sweets.",
              achievements: ["Artisan bread making", "Cake decorating", "Traditional sweets"]
            }
          ],
          specialties: [
            "Fish Curry (Kerala Style)",
            "Appam with Stew",
            "Beef Fry",
            "Puttu and Kadala",
            "Fusion Pasta",
            "Artisan Sourdough"
          ],
          techniques: ["Fermentation", "Spice Tempering", "Clay Pot Cooking", "Smoking", "Molecular Gastronomy"]
        };
      
      default:
        return null;
    }
  };

  const content = getDrawerContent();
  if (!content) return null;

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300"
          onClick={onClose}
        />
      )}
      
      {/* Drawer */}
      <div className={`fixed right-0 top-0 h-full w-full max-w-2xl bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              {content.icon}
              <div>
                <h2 className="text-2xl font-bold text-slate-800">{content.title}</h2>
                <p className="text-slate-600">{content.subtitle}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors duration-200"
            >
              <X size={24} className="text-slate-600" />
            </button>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-slate-700 leading-relaxed">{content.description}</p>
          </div>

          {/* Photography Gallery */}
          {type === 'photography' && content.gallery && (
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Recent Work</h3>
              <div className="grid grid-cols-2 gap-4">
                {content.gallery.map((image, index) => (
                  <div key={index} className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
                    <img 
                      src={image} 
                      alt={`Photography work ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stock Market Performance */}
          {type === 'stocks' && content.performance && (
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Performance Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(content.performance).map(([key, value]) => (
                  <div key={key} className="bg-slate-50 rounded-lg p-4">
                    <div className="text-sm text-slate-600">{key}</div>
                    <div className="text-2xl font-bold text-emerald-600">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Cooking Specialties */}
          {type === 'cooking' && content.specialties && (
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Signature Dishes</h3>
              <div className="grid grid-cols-2 gap-2">
                {content.specialties.map((dish, index) => (
                  <div key={index} className="bg-orange-50 text-orange-800 px-3 py-2 rounded-lg text-sm font-medium">
                    {dish}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Highlights */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Key Areas</h3>
            <div className="space-y-6">
              {content.highlights.map((highlight, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-slate-800 mb-2">{highlight.title}</h4>
                  <p className="text-slate-600 mb-3">{highlight.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {highlight.achievements.map((achievement, achIndex) => (
                      <span key={achIndex} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools/Equipment */}
          {(content.equipment || content.tools || content.techniques) && (
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                {type === 'photography' ? 'Equipment' : type === 'stocks' ? 'Tools & Platforms' : 'Techniques'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {(content.equipment || content.tools || content.techniques)?.map((item, index) => (
                  <span key={index} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Trading Strategies */}
          {type === 'stocks' && content.strategies && (
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Trading Strategies</h3>
              <div className="grid grid-cols-2 gap-2">
                {content.strategies.map((strategy, index) => (
                  <div key={index} className="bg-emerald-50 text-emerald-800 px-3 py-2 rounded-lg text-sm font-medium">
                    {strategy}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl p-6 text-white">
            <h4 className="text-lg font-bold mb-2">Interested in collaborating?</h4>
            <p className="mb-4 opacity-90">
              {type === 'photography' && "Let's capture your special moments together!"}
              {type === 'stocks' && "Discuss trading strategies and market insights!"}
              {type === 'cooking' && "Share recipes and culinary experiences!"}
            </p>
            <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full transition-colors duration-200 flex items-center gap-2">
              <ExternalLink size={16} />
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InterestDrawer;