import { TreePine, Target, Eye, Heart, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            About Parquetur
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Dedicated to preserving Brazil&apos;s natural heritage while creating
            unforgettable experiences for visitors from around the world
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg border-2 bg-card p-8">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">
              Our Mission
            </h2>
            <p className="text-muted-foreground">
              To protect and preserve Brazil&apos;s most precious natural
              ecosystems while providing sustainable, educational, and inspiring
              experiences that connect people with nature and foster environmental
              stewardship for future generations.
            </p>
          </div>

          <div className="rounded-lg border-2 bg-card p-8">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Eye className="h-8 w-8 text-primary" />
            </div>
            <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">
              Our Vision
            </h2>
            <p className="text-muted-foreground">
              To be Brazil&apos;s leading network of natural parks, recognized
              internationally for excellence in conservation, visitor experience,
              and environmental education, creating a model for sustainable
              eco-tourism across Latin America.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center font-serif text-3xl font-bold text-foreground">
              Our Story
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Founded in 2010, Parquetur began with a simple yet powerful idea:
                to make Brazil&apos;s incredible natural beauty accessible to
                everyone while ensuring its protection for generations to come.
              </p>
              <p>
                What started as a single conservation area has grown into a network
                of six protected parks spanning over 50,000 hectares across
                different Brazilian states. Each park was carefully selected for
                its unique ecosystem, biodiversity, and natural beauty.
              </p>
              <p>
                Today, we welcome over 200,000 visitors annually, employing local
                communities, supporting conservation research, and working closely
                with environmental organizations to protect endangered species and
                habitats.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold text-foreground">
            Our Values
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <TreePine className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Conservation
              </h3>
              <p className="text-sm text-muted-foreground">
                Protecting biodiversity and natural habitats is at the heart of
                everything we do
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Sustainability
              </h3>
              <p className="text-sm text-muted-foreground">
                Operating responsibly to minimize environmental impact and support
                local communities
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Excellence
              </h3>
              <p className="text-sm text-muted-foreground">
                Delivering exceptional visitor experiences while maintaining the
                highest conservation standards
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Education
              </h3>
              <p className="text-sm text-muted-foreground">
                Inspiring environmental awareness and fostering a deeper connection
                with nature
              </p>
            </div>
          </div>
        </div>

        {/* Conservation Impact */}
        <div id="conservation" className="rounded-lg border-2 bg-muted/30 p-8 md:p-12">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-foreground">
            Our Conservation Impact
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">50,000+</div>
              <div className="text-sm text-muted-foreground">
                Hectares Protected
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">1,000+</div>
              <div className="text-sm text-muted-foreground">
                Species Conserved
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">25+</div>
              <div className="text-sm text-muted-foreground">
                Research Projects
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">
                Local Jobs Created
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
