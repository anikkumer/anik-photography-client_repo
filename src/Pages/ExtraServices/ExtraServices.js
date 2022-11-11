import React from "react";

const ExtraServices = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl font-semibold"> Extra Services</h2>
        <p>
          Services are the non-physical, intangible parts of our economy, as
          opposed to goods, which we can touch or handle. Services, such as
          banking, education, medical treatment, and transportation make up the
          majority of the economies of the rich nations. They also represent
          most of the emerging nations economies.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://media.istockphoto.com/id/1190440285/photo/eclectic-living-room-interior-with-comfortable-velvet-corner-sofa-with-pillows.jpg?s=612x612&w=0&k=20&c=T87OfLSfrChREiVaDLJA4LIM2qvrc7UaosmxH75RY98="
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Home Decoration</h2>
            <p>
              {" "}
              Home decor is inclusive of physical items and objects (furniture,
              art, and accessories), placement of physical items and objects,
              and room colors and materials (flooring, wall coverings, window
              coverings, and ceilings). Interior decorating is the art of
              decorating a residential home or commercial business according to
              a client's personal preferences and style.
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">$500</div>
              <div className="badge badge-outline">4.5</div>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://previews.123rf.com/images/dizanna/dizanna1503/dizanna150301154/37744752-business-idea-timeline-plan-concept.jpg"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Business Idea</h2>
            <p>
              General business description examples give you an idea on how to
              write a business description or company profile for your company,
              so that it communicates your field and scope of business to your
              target audience in the most effective manner possible. The general
              company description should tell your audience what your company
              does, what its goals are and what business philosophy it
              subscribes to.
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">$300</div>
              <div className="badge badge-outline">3.5</div>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://d1zpvjny0s6omk.cloudfront.net/media/fileupload/2016/03/30/Sikkel:Chuang_KarlischStudio_AfterParty.jpg"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Cultural Decoration</h2>
            <p>
              Decorative art, any of those arts that are concerned with the
              design and decoration of objects that are chiefly prized for their
              utility, rather than for their purely aesthetic qualities.
              Ceramics, glassware, basketry, jewelry, metalware, furniture,
              textiles, clothing, and other such goods are the objects most
              commonly associated with the decorative arts.
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">$400</div>
              <div className="badge badge-outline">4.5</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraServices;
